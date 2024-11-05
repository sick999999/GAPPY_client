<template>
   <div class="container-fluid" id="cardContainer">
    <!-- 네비게이션 바 -->
    <nav class="custom-navbar">
      <div class="navbar-container">
        <div class="navbar-group left-group">
          <div v-if="!isSpeaking">
            <button class="btn custom-button" @click="startVoiceInteraction">Voice Chat</button>
          </div>
          <div v-else>
            <button class="btn custom-button" @click="stopSpeaking">Stop</button>
          </div>

          <router-link to="/about" class="btn custom-button">About</router-link>
        </div>
        <router-link to="/">
          <h1 class="title text-left">
            <div>Everything<br>
              Can Be<br>
              Scanned</div>
          </h1>
        </router-link>
        <div class="navbar-group right-group">
          <router-link to="/Receipt" class="btn custom-button">Receipt</router-link>
          <button class="btn custom-button" @click="openSidebar">Cart</button>
          <div class="sidebar" :class="{ 'open': isSidebarOpen }">
            <button @click="closeSidebar" class="close-btn">&times;</button>

            <h2 class="sidebar-text">You read</h2>
            <ul class="sidebar-text-inner" v-for="(article, idx) in cartArticles" :key="idx">
              {{ article.title }}
            </ul>

          </div>
        </div>
      </div>
    </nav>
  </div>
  <RouterView />

</template>

<script>
import news from '@/assets/news.js'
import _ from 'lodash'
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      news: news,
      isSidebarOpen: false,
      isSpeaking: false,
      cart: []
    }
  },

  computed: {
    // 'cart'에 있는 기사만 필터링
    cartArticles() {
      return this.news.filter(article => this.cart.includes(article.id));
    },
  },

  beforeMount() {
    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', '[]');
    }
    // data의 cart를 localstrage 에 저장되어있는 cart 값이랑 동기화
    this.cart = JSON.parse(localStorage.getItem('cart'));

  },

  methods: {
    openSidebar() {
      this.isSidebarOpen = true;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    },
    beforeMount() {
      if (localStorage.getItem('cart') === null) {
        localStorage.setItem('cart', '[]');
      }
      // data의 cart를 localstrage 에 저장되어있는 cart 값이랑 동기화
      this.cart = JSON.parse(localStorage.getItem('cart'));

    },
    addToCart(articleId) {
      this.cart = JSON.parse(localStorage.getItem('cart'))
      // cart에 숫자가 없으면 추가한다
      if (!this.cart.includes(articleId)) {
        this.cart.push(articleId)
      }
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },


    startVoiceInteraction() {
      // 음성 인식을 위한 객체 생성
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'ko-KR'; // 한국어 설정

      recognition.start();

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        // 서버로 텍스트 전송
        fetch('http://localhost:5000/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: transcript }),
        })
          .then(response => response.json())
          .then(data => {
            // 음성 합성을 통해 응답 읽어주기
            this.speakText(data.message);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };

      recognition.onerror = (event) => {
        console.error('음성 인식 오류:', event.error);
      };
    },
    speakText(text) {
      this.isSpeaking = true;
      // 이전에 재생 중인 음성 합성 중지
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ko-KR';
      // 필요에 따라 속도와 피치 조절 가능
      utterance.rate = 1.4;
      utterance.pitch = 1.2;

      // 음성 합성 실행
      window.speechSynthesis.speak(utterance);
    },
    stopSpeaking() {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
    }
  }
}
</script>

<style>
.custom-navbar {
  background-color: white;
  width: 100%;
  padding: 0px 0;
  box-sizing: border-box;
  /* 네브바 배경을 흰색으로 설정 */
}

.custom-button {
  margin-top: 50px;
  min-width: 200px;
  font-size: 1.4rem;
  padding: 0px 0px;
  white-space: nowrap;
  background: none;
  border: none;
  cursor: pointer;
}


.title {
  font-size: 4.7rem;
  letter-spacing: 2.5px;
  font-weight: bold;
  font-family: sans-serif;
  line-height: 105%;
  color: #1f1f1f;
  margin-top: 10px;
}

.sidebar {
  position: fixed;
  right: -300px;
  /* 초기에는 화면 밖에 위치 */
  top: 120px;
  width: 310px;
  height: 600px;
  background-color: #f6f6f6;
  transition: right 0.8s ease-in-out;
  z-index: 1000;
  text-align: left;
  margin-top: 23px;
  border-radius: 2%;
}

.sidebar.open {
  right: 0;
  /* 열릴 때 화면 안으로 이동 */
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 50px;
  font-size: 20px;
  border: 4.5em solid #848484;
  border-radius: 15%;
  background: #888888;
  border: 1px;
  cursor: pointer;
}

.sidebar-text {
  margin-top: 15px;
  margin-left: px;
  font-size: 1.1rem;
  font-family: sans-serif;
  text-align: center;


}
</style>

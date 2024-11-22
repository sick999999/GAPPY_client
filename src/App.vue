<template>
  <div class="container-fluid" id="cardContainer">
    <!-- 네비게이션 바 -->
    <nav class="custom-navbar">
      <div class="navbar-container">
        <div class="navbar-group left-group">
          <div v-if="!isSpeaking" role="status">
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
          <button class="btn custom-button" @click="openSidebar">Cart [<span style="color: red;">{{ cartLength
              }}</span>]</button>
          <div class="sidebar" :class="{ 'open': isSidebarOpen }" @click="closeSidebar">



            <h2 class="sidebar-text">You read</h2>
            <button class="Cart-clear" @click="clearCart">Cart Clear</button>
            <ul class="sidebar-text-inner" v-for="(article, idx) in cartArticles.slice(0, 11)" :key="idx">
              <router-link :to="`/news/${article.author}/${article.id}`">
                ₩ {{ article.title }}
              </router-link>
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

export default {
  data() {
    return {
      news: news,
      isSidebarOpen: false,
      isSpeaking: false,
      cart: [],
      cartLength: [],
    }
  },

  beforeMount() {
    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', '[]');
    }

    this.cart = JSON.parse(localStorage.getItem('cart'));
  },

  updated() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  },

  mounted() {
    // 음성 인식 객체 초기화
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'ko-KR'; // 한국어 설정
  },

  methods: {
    openSidebar() {
      this.isSidebarOpen = true;
    },

    closeSidebar() {
      this.isSidebarOpen = false;
    },

    addToCart(articleId) {
      // cart에 숫자가 없으면 추가한다
      if (!this.cart.includes(articleId)) {
        this.cart.push(articleId);
      }
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },


    clearCart() {
      localStorage.setItem('cart', '[]')
      this.cart = []
    },


    startVoiceInteraction() {
      this.isSpeaking = true;

      // 음성 인식을 위한 객체 생성
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.lang = 'ko-KR';
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
      };
    },

    updateCartLength() {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const cartLength = cart.length;
    },

    speakText(text) {
      // 이전에 재생 중인 음성 합성 중지
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ko-KR';
      // 필요에 따라 속도와 피치 조절 가능
      utterance.rate = 1.6;
      utterance.pitch = 1.3;

      // 음성 합성 실행
      window.speechSynthesis.speak(utterance);
      this.isSpeaking = false;

    },
    stopSpeaking() {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
      window.speechSynthesis.onend = () => { this.isSpeaking = false; };
      window.speechSynthesis.speak(utterance);
    }
  },

  computed: {
    // 'cart'에 있는 기사만 필터링
    cartArticles() {
      return this.news.filter(article => this.cart.includes(article.id));
    },

    cartLength() {
      // cart 배열의 길이를 반환하는 computed 속성
      return this.cart.length;
    }
  },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Grandiflora+One&family=IBM+Plex+Sans+KR&family=Noto+Serif+KR:wght@200..900&display=swap');

.custom-navbar {
  background-color: white;
  width: 100%;
  padding: 0px 0;
  box-sizing: border-box;
  /* 네브바 배경을 흰색으로 설정 */
}

.custom-button {
  margin-top: 30px;
  min-width: 200px;
  font-size: 1.35rem;
  padding: 0px 0px;
  white-space: nowrap;
  background: none;
  border: none;
  cursor: pointer;
}


.title {
  font-size: 4.6rem;
  letter-spacing: 0px;
  font-weight: 600;
  font-family: Georgia;
  line-height: 120%;
  color: #1f1f1f;
  margin-top: 10px;
  text-align: left;
}

.sidebar {
  position: fixed;
  right: -300px;
  /* 초기에는 화면 밖에 위치 */
  top: 125px;
  width: 305px;
  height: 620px;
  background-image: url('@/assets/images/receipt2.png');
  background-position: bottom;
  /* 이미지가 중앙에 위치 */
  background-repeat: no-repeat;
  /* 이미지가 반복되지 않음 */
  line-height: 100%;
  transition: right 1s ease-in-out;
  z-index: 1000;
  text-align: left;
  color: rgb(48, 48, 48);
  margin-top: 10px;
  border-radius: 0%;
}

.sidebar.open {
  right: 0;
  /* 열릴 때 화면 안으로 이동 */
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 60px;
  font-size: 15px;
  border: 1px solid #000000;
  border-radius: 5%;
  background: #888888;
  cursor: pointer;
}

.sidebar-text {
  margin-top: 18px;
  margin-left: 0px;
  font-size: 1.3rem;
  font-family: Georgia;
  text-align: center;
}

.sidebar-text-inner {
  margin-top: 33px;
  line-height: 20%;
  font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: 300;
  font-size: 1.1rem;

}

.Cart-clear {
  position: absolute;
  margin-top: 500px;
  margin-left: 115px;
  color: #535353;
  border: 0.5px solid #535353;
  border-radius: 10%;
  font-size: 15px;
  padding: 3px;
}

.custom-button.waiting {
  cursor: wait;
  /* 음성 인식 중일 때 커서 모양 변경 */
}
</style>

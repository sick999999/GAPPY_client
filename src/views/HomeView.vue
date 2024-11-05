<template>

  <!-- 전체 컨테이너 -->

  <!-- 네비게이션 바 -->
 

    <div class="card-wrapper flex" id="cardWrapper">

      <div class="card" v-for="(article, idx) in news" :key="idx" @click="addToCart(article.id)">
        <RouterLink :to="`/news/${article.author}/${article.id}`">
          <div class="card-image">
            <img :src="article.iconimgUrl" alt="Image">
          </div>
          <div class="card-text">
            {{ article.title }}<br>
            {{ article.author }}<br>
          </div>
        </RouterLink>
      </div>
    </div>

  <footer class="footer">
    <div style="font-size: 1.1rem">Instagram<br> Facebook<br>Twitter </div>
    <div style="text-align: center">(Postal code)03779 11th Floor, Vertigo Building<br>
      8-1 Yonsei-ro, Seodaemun-gu<br> Seoul, South Korea </div>
    <div style="text-align: right">ⓒ2024 GAPPY<br> All right reserved.<br> </div>
  </footer>
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



  methods: {
    openSidebar() {
      this.isSidebarOpen = true;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
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

  },

  mounted() {
    const container = document.getElementById('cardContainer');
    const cardWrapper = document.getElementById('cardWrapper');
    const cards = document.querySelectorAll('.card');
    const cardWidth = 550; // 카드 너비 + 마진
    const totalWidth = cardWidth * 19;
    const scrollSpeed = 0.45; // 스크롤 속도 조절 변수

    function updateCardPosition(mouseX) {
      const containerWidth = container.offsetWidth;
      const maxScroll = totalWidth - containerWidth;
      const scrollPercentage = mouseX / containerWidth;
      const newScrollLeft = maxScroll * scrollPercentage * scrollSpeed; // 속도 반영

      cardWrapper.style.transform = `translateX(${-newScrollLeft}px)`;

      cards.forEach((card, index) => {
        const cardCenter = (index * cardWidth + cardWidth / 2) - newScrollLeft;
        const offset = cardCenter - containerWidth / 2;
        const normalizedOffset = offset / (containerWidth / 2);

      });
    }

    cardWrapper.addEventListener('mousemove', (event) => {
      const mouseX = event.clientX - container.getBoundingClientRect().left;
      updateCardPosition(mouseX);
    });
  }
}




</script>

<style>
body,
html {
  margin: 0px;
  padding: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
}

/* 상단 네비게이션 바 */

/* 카드와 레일 */
.card-wrapper {
  bottom: 0%;
  text-transform: 0;
  margin-top: 40px;
  display: flex;
  gap: 50px;
  justify-content: space-evenly;
  transition: transform 2.8s ease-out;
  width: calc(450px * 10);
  /* 카드 너비 + 마진 * 카드 개수 */
}

.card {
  width: 300px;
  height: 450px;

  background-image: url('@/assets/images/card-back-image.png');
  background-size: contain;
  /* 이미지가 카드 크기에 맞게 조정됨 */
  background-position: center;
  /* 이미지가 중앙에 위치 */
  background-repeat: no-repeat;
  /* 이미지가 반복되지 않음 */
  opacity: 1;

  border: 1px solid #eeeeee;
  border-radius: 5%;
  font-family: sans-serif;
  /* font-weight: ; */
  display: flex;
  justify-content: center;
  align-items: flex;
  font-size: 1.05rem;
  color: #363636;
  margin-top: 0px;
  padding: 5px;
  flex-shrink: 0;
  transition: transform 2.5s ease ease-in-out;
  text-align: left;


}

.card-text {
  margin-top: 160px;
  margin-bottom: 0px;
  /* 상단에 마진 추가 */
  margin-left: 33px;
  line-height: 280%;
  letter-spacing: 0.5px;
}
.card-image img {
  position: absolute; 
  top: 27px;
  left: 27px;
  width: 190px;
  height: 230px;
  size: contain;
  /* 이미지가 카드 크기에 맞게 조정됨 */
  position: top;
  /* 이미지가 중앙에 위치 */  
  repeat: no-repeat;
  /* 이미지가 반복되지 않음 */
  opacity: 1;
}


a {
  color: inherit;
  text-decoration: none;
  font-family: 'Noto Sans KR';
}

.footer {
  display: flex;
  justify-content: space-around;
  align-items: right;

  width: 100%;
  height: 25px;
  background-color: #ffffff;
  color: #000000;
  font-size: 1.1rem;
  position: fixed;
  bottom: 50px;
  z-index: 20;
}


.custom-navbar {
  font-family: sans-serif;
  width: 100%;
  max-width: 100%;
  padding: 0 0px;
  box-sizing: border-box;
}

.navbar-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.navbar-group {
  display: flex;
  align-items: start;
  gap: 100px;
  margin-top: 10px;
}

.left-group {
  justify-content: flex-start;
  text-align: right;
}

.right-group {
  justify-content: flex-end;
  text-align: left;
}

.custom-button {
  min-width: 150px;
  flex: 0 0 auto;
}

@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column;
    align-items: center;
  }
}

.navbar-group {
  justify-content: center;
  margin-top: 100px;
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

.icon-image {
  width: 3rem;
  /* 아이콘 크기 */
  height: 3rem;
  object-fit: cover;
  /* 이미지 비율 유지 */
  vertical-align: middle;
  /* 버튼 텍스트와 맞추기 */
}


</style>
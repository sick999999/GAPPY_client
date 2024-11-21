<template>

  <!-- 전체 컨테이너 -->

  <!-- 네비게이션 바 -->


  <div class="card-wrapper flex" id="cardWrapper">

    <div class="card" v-for="(article, idx) in pageNews" :key="idx" @click="addToCart(article.id)">
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
    <div>
      <button class="pre-next" @click="onNext">Next</button><br>
      <button class="pre-next" @click="onPrevious">Previous</button>
    </div>


    <div style="text-align: center">KOREAN'S FAVORITE NEWS-MARKET<br>
      We Make The Brands You Love<br> From Seoul</div>
    <div style="text-align: right">ⓒ2024 GAPPY<br> All right reserved<br></div>
  </footer>
</template>

<script>
import news from '@/assets/news.js'
import _ from 'lodash'
import { RouterLink } from 'vue-router'

export default {
  data() {
    return {
      news: news,
      page: 1,
      isSidebarOpen: false,
      isSpeaking: false,
      cart: []
    }
  },
  computed: {
    pageNews() {
      const start = (this.page - 1) * 10
      const end = this.page * 10
      return this.news.slice(start, end)
    }
  },


  methods: {
    onNext() {
      if (this.page < 3) this.page++
    },
    onPrevious() {
      if (this.page > 1) this.page--
    },
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
        this.cart.push(articleId),
          localStorage.setItem('cart', JSON.stringify(this.cart));

        this.$root.updateCartLength();
      }
    },

    updateCartLength() {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      this.cartLength = cart.length;
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
      utterance.rate = 1.2;
      utterance.pitch = 1.1;

      // 음성 합성 실행
      window.speechSynthesis.speak(utterance);
    },
    stopSpeaking() {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
    },

  },

  mounted() {
    const container = document.getElementById('cardContainer');
    const cardWrapper = document.getElementById('cardWrapper');
    const cards = document.querySelectorAll('.card');
    const cardWidth = 400; // 카드 너비 + 마진
    const totalWidth = cardWidth * 15;
    const scrollSpeed = 0.4; // 스크롤 속도 조절 변수

    function updateCardPosition(mouseX) {
      const containerWidth = container.offsetWidth;
      const maxScroll = totalWidth - containerWidth;
      const scrollPercentage = mouseX * 5 / totalWidth;
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
@import url('https://fonts.googleapis.com/css2?family=Grandiflora+One&family=Noto+Serif+KR:wght@200..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Grandiflora+One&family=IBM+Plex+Sans+KR&family=Noto+Serif+KR:wght@200..900&display=swap');

body,
html {
  margin: 0px;
  padding: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  font-family: Georgia, 'Times New Roman', Times, serif;
  ;
  font-weight: 500;
  display: flex;
  flex-direction: column;
}

.card-wrapper {
  text-transform: 0;
  margin-top: 20px;
  display: flex;
  gap: 0px;
  justify-content: space-evenly;
  transition: transform 3s ease-out;
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
  opacity: 0.9;

  border: 1px solid #ffffff;
  border-radius: 4%;
  font-family: Georgia, 'Times New Roman', Times, serif;
  ;
  font-weight: 500;
  /* font-weight: ; */
  display: flex;
  justify-content: center;
  align-items: flex;
  font-size: 1.1rem;
  color: #363636;
  margin-top: 0px;
  padding: 5px;
  flex-shrink: 0;
  transition: transform 3s ease ease-in-out;
  text-align: left;


}

.card-text {
  margin-top: 163px;
  margin-bottom: 0px;
  /* 상단에 마진 추가 */
  margin-left: 34px;
  line-height: 265%;
  letter-spacing: 1px;
  font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: 400;
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
  border: 0px solid #eeeeee;
  border-radius: 2%;
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
  height: 2rem;
  background-color: #ffffff;
  color: #000000;
  font-family: Georgia;
  font-size: 1.05rem;
  font-weight: 0;
  position: fixed;
  bottom: 3rem;
  z-index: 1000;
}


.custom-navbar {
  font-family: Georgia;
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
  margin-top: 1px;
}

.left-group {
  justify-content: flex-start;
  text-align: right;
}

.right-group {
  margin-top: 0px;
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

.icon-image {
  width: 3rem;
  /* 아이콘 크기 */
  height: 3rem;
  object-fit: cover;
  /* 이미지 비율 유지 */
  vertical-align: middle;
  /* 버튼 텍스트와 맞추기 */
}

.pre-next {
  font-size: 1.25rem;
  line-height: 130%;
  white-space: nowrap;
  background: none;
  font-family: georgia;
  border: none;
  cursor: pointer;
}
</style>
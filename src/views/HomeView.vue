<template>

  <!-- 전체 컨테이너 -->
  <div class="container-fluid" id="cardContainer">
    <!-- 네비게이션 바 -->
    <nav class="custom-navbar">
      <div class="navbar-container">
        <div class="navbar-group left-group">
          <button class="btn custom-button" @click="shuffleNews">REnews</button>
          <router-link to="/about" class="btn custom-button">ABout</router-link>
        </div>
        <router-link to="/">
         <h1 class="title text-left">
            <div style="color:black"><span style="color: #8ACE00">G</span>eneral<br><span
                style="color: #8ACE00">A</span>nd artificial<br></div><span style="color: #8ACE00">P</span>attern of Life
        </h1>
      </router-link>
    <div class="navbar-group right-group">
      <router-link to="/Receipt" class="btn custom-button">Receipt</router-link>
      <button class="btn custom-button" @click="openSidebar">Cart</button>

      <div class="sidebar" :class="{ 'open': isSidebarOpen }">
        <button @click="closeSidebar" class="close-btn">&times;</button>
        <h2 class="sidebar-text">You read</h2>
      </div>
    </div>
  </div>
  </nav>
  </div>

  <div class="card-wrapper mt-4 flex" id="cardWrapper">

    <div class="card" v-for="(article, idx) in initialNews" :key="idx" @click="addToCart(article.id)">
      <RouterLink :to="`/news/${article.author}/${article.id}`">
        <div class="card-text">
          {{ article.title }}<br>
          {{ article.author }}<br>
        </div>
      </RouterLink>
    </div>
  </div>

  <footer class="footer mt-15">
    <div style="font-size: 1.25rem">Instagram<br> Facebook<br>Twitter </div>
    <div style="text-align: center, line-height: 80%">(Postal code)03779 11th Floor, Vertigo Building<br>
      8-1 Yonsei-ro, Seodaemun-gu<br> Seoul, South Korea<br> TEL: 010-4444-8888<br>Mail: help@gappy.co.kr<br> </div>
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
      isSidebarOpen: false
    }
  },
  computed: {
    initialNews() {
      return this.news.slice(0, 10)
    }
  },
  methods: {
    shuffleNews() {
      // _ => lodash 라이브러린
      this.news = _.shuffle(this.news)
    },
    openSidebar() {
      this.isSidebarOpen = true;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    },
    addToCart(articleId) {
      const cart = JSON.parse(localStorage.getItem('cart'))
      cart.push(articleId)
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  },
  beforeMount() {
    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', '[]')
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
  overflow: hidden;
}

/* 상단 네비게이션 바 */
.custom-navbar {
  background-color: white;
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  /* 네브바 배경을 흰색으로 설정 */
}

.custom-button {
  min-width: 150px;
  font-size: 1.4rem;
  padding: 0px 0px;
  white-space: nowrap;
  background: none;
  border: none;
  cursor: pointer;
}




/* 전체 컨테이너 */
/* .container {
            width: 100vw;
            height: calc(100vh - 50px);
            
            position: relative;
            perspective: 0px;
            margin-top: 0px;
            margin-left: 0px;
            margin-right: 0px;
            overflow: hidden;
        } */

/* 타이틀 간판 스타일 */
/* .title {
            position: absolute;
            top: 8%;
            left: 50%;
            transform: translateX(-50%);
            background-color: #ffffff;
            color: #000000;
            padding: 0px 0px;
            border-radius: 0px;
            font-size: 100px;
            font-family: monospace;
            letter-spacing: 5px;
            text-align: center;
            z-index: 0;
            box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.1);
        } */
.title {
  font-size: 4.6rem;
  letter-spacing: 3px;
  font-weight: bold;
  font-family: sans-serif;
  line-height: 110%;
  #color: #8ACE00;
}

/* 카드와 레일 */
.card-wrapper {
  bottom: 15%;
  text-transform: 10;
  margin: 1rem;
  display: flex;
  gap: 0px;
  justify-content: space-evenly;
  transition: transform 2.5s ease-out;
  width: calc(600px * 10);
  /* 카드 너비 + 마진 * 카드 개수 */
}

.card {
  width: 350px;
  height: 525px;

  background-image: url('@/assets/images/image.png');
  background-size: contain;
  /* 이미지가 카드 크기에 맞게 조정됨 */
  background-position: center;
  /* 이미지가 중앙에 위치 */
  background-repeat: no-repeat;
  /* 이미지가 반복되지 않음 */
  opacity: 0.9;

  border: 1px solid #ffffff;
  border-radius: 5%;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: flex;
  font-size: 1.2rem;
  color: rgb(0, 0, 0);
  margin: 0;
  padding: 100;
  flex-shrink: 0;
  transition: transform 2.5s ease ease-in-out;
  text-align: left;


}

.card-text {
  margin-top: 175px;
  /* 상단에 마진 추가 */
  margin-left: 45px;
  line-height: 300%;
  letter-spacing: 0px;
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
  height: 50px;
  background-color: #ffffff;
  color: #000000;
  font-size: 1.1rem;
  position: fixed;
  bottom: 55px;
  z-index: 20;
}

/* .card:nth-child(1),
        .card:nth-child(2),
        .card:nth-child(3),
        .card:nth-child(4),
        .card:nth-child(5),
        .card:nth-child(6),
        .card:nth-child(7),
        .card:nth-child(8),
        .card:nth-child(9),
        .card:nth-child(10),
        .card:nth-child(11),
        .card:nth-child(12),
        .card:nth-child(13),
        .card:nth-child(14),
        .card:nth-child(15) {
            background-color: #000000;
        } */
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
  flex: 10 10 auto;
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
  right: -290px;
  /* 초기에는 화면 밖에 위치 */
  top: 91px;
  width: 310px;
  height: 710px;
  background-color: #f6f6f6;
  transition: right 0.8s ease-in-out;
  z-index: 1000;
  text-align: center;
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
  font-size: 22px;
  border: 5em solid #8ACE00;
  border-radius: 20%;
  background: #8ACE00;
  border: 1px;
  cursor: pointer;
}

.sidebar-text {
  margin-top: 15px;
  font-size: 1.3rem;
  font-family: sans-serif;
  text-align: center;


}
</style>
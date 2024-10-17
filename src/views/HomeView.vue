<template>

  <!-- 전체 컨테이너 -->
  <div class="container" id="cardContainer">
    <!-- 네비게이션 바 -->
    <nav class="navbar custom-navbar mt-5 mb-0" style="max-width: 600px; margin: auto;">
      <div class="container-fluid"
        style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; font-family: monospace;">
        <button class="btn custom-button me-2" style="flex: 100px; min-width: 100px;"
          @click="shuffleNews">Shuffle</button>
        <button class="btn custom-button me-2" style="flex: 100px; min-width: 100px;" type="button">Receipt</button>
        <button class="btn custom-button me-2" style="flex: 100px; min-width: 100px;" type="button">Know
          Yourself</button>
        <button class="btn custom-button me-2" style="flex: 100px; min-width: 100px;" type="button">Fill the
          gaps</button>
      </div>
    </nav>

    <!-- 타이틀-->
    <div class="title text-center mt-0">gAppy gLappy</div>
    <div class="text-center">

    </div>
    <!-- 카드 레일 -->
    <!-- <div class="rail"></div> -->


    <!-- 카드 목록 -->
    <div class="card-wrapper mt-10" id="cardWrapper">

      <div class="card" v-for="(article, idx) in news" :key="idx">
        <RouterLink :to="`/news/${article.author}/${article.id}`">
          {{ article.title }}<br>
          {{ article.author }}<br>
        </RouterLink>
      </div>
    </div>

  </div>

</template>

<script>
import news from '@/assets/news.js'
import _ from 'lodash'
import { RouterLink } from 'vue-router';
export default {
  data() {
    return {
      news: news,
    }
  },
  methods: {
    shuffleNews() {
      // _ => lodash 라이브러린
      this.news = _.shuffle(this.news)
    }
  },
  mounted() {
    const container = document.getElementById('cardContainer');
    const cardWrapper = document.getElementById('cardWrapper');
    const cards = document.querySelectorAll('.card');
    const cardWidth = 350; // 카드 너비 + 마진
    const totalWidth = cardWidth * 30;
    const scrollSpeed = 0.4; // 스크롤 속도 조절 변수

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

    container.addEventListener('mousemove', (event) => {
      const mouseX = event.clientX - container.getBoundingClientRect().left;
      updateCardPosition(mouseX);
    });
  }
}
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  font-family: monospace;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 상단 네비게이션 바 */
.custom-navbar {
  background-color: white;
  /* 네브바 배경을 흰색으로 설정 */
}

.custom-button {
  border-color: black;
  /* 버튼 테두리 색을 검정색으로 설정 */
  color: black;
  /* 버튼 텍스트 색을 검정색으로 설정 */
}

.custom-button:hover {
  background-color: black;
  /* 마우스를 올렸을 때 버튼 배경을 검정색으로 변경 */
  color: white;
  /* 마우스를 올렸을 때 텍스트 색을 흰색으로 변경 */
}

/* 푸터 */
.footer {
  width: 100%;
  height: 20px;
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  line-height: 25px;
  font-size: 20px;
  position: fixed;
  bottom: 0;
  z-index: 20;
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
  font-size: 10rem;
  letter-spacing: 0px;
  font-weight: bolder;
}

/* 카드와 레일 */
.card-wrapper {
  /* position: absolute;
  bottom: 15%;
  left: 0; */
  margin-top: 1.5rem;
  transform: translateX(0%);
  display: flex;
  transition: transform 2s ease-out;
  width: calc(350px * 20);
  /* 카드 너비 + 마진 * 카드 개수 */
}

.card {
  width: 300px;
  height: 450px;

  background-image: url('https://blog.kakaocdn.net/dn/rAbOV/btqCinFCC2j/QyMnulbHNVwvIkhjNec0CK/img.jpg');
  background-size: auto;
  /* 이미지가 카드 크기에 맞게 조정됨 */
  background-position: center;
  /* 이미지가 중앙에 위치 */
  background-repeat: no-repeat;
  /* 이미지가 반복되지 않음 */
  opacity: 0.8;

  border: 1px solid #ffffff;
  border-radius: 5%;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: rgb(255, 255, 255);
  margin: 0 20px;
  flex-shrink: 0;
  transition: transform 2s ease ease-in-out;
  text-align: center;
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
</style>
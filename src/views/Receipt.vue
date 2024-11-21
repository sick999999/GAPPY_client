<template>
  <div class="receipt-container">
    <img class='receipt-icon' @click="print" src="@/assets/images/print.jpg" alt="print button"
      style="cursor: pointer;">
    <div class="image-container">
      <img class='receipt-paper' src="@/assets/images/receipt2.png" alt="Receipt Image" />
      <span class="overlay-text">{{ ans }} </span>
    </div>

    <div class="card-wrapper flex" id="cardWrapper">

      <div class="card" v-for="(article, idx) in news.slice(18, 21)" :key="idx" @click="addToCart(article.id)">
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
  </div>

</template>

<script>
import news from '@/assets/news.js';
import _ from 'lodash'
import { RouterLink } from 'vue-router';
import axios from 'axios';

export default {
  data() {
    return {
      ans: '',
      news: news,

    }
  },
  mounted() {
    const cardWrapper = this.$el.querySelector('.card-wrapper');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target); // 애니메이션이 한 번 실행된 후에는 더 이상 감시하지 않음
        }
      });
    }, { threshold: 0.2 }); // 20% 보이면 애니메이션 실행

    observer.observe(cardWrapper);
  },

  computed: {
    cartLabels() {
      const cart = JSON.parse(localStorage.getItem('cart'))
      return news.filter(n => cart.includes(n.id)).map(n => [n.감정, n.대분야, n.소분야, n.유형].join(' '))
    }
  },
  methods: {
    async print() {
      const res = await axios.post('http://127.0.0.1:5000/receipt', {
        labels: this.cartLabels,
      })

      this.ans = res.data.message

    },
    addToCart(articleId) {
      // cart에 숫자가 없으면 추가한다
      const cartNews = JSON.parse(localStorage.getItem('cart'))
      if (!cartNews.includes(articleId)) {
        cartNews.push(articleId)
      }
      localStorage.setItem('cart', JSON.stringify(cartNews))
    },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Grandiflora+One&family=IBM+Plex+Sans+KR&family=Noto+Serif+KR:wght@200..900&display=swap');

.image-container {
  align-items: center;
  position: relative;
  display: inline-block;
}

.receipt-paper {
  width: 40vw;
}

.overlay-text {
  position: absolute;
  width: 400px;
  top: 14rem;
  left: 180px;
  font-family: "IBM Plex Sans KR", sans-serif;
  text-align: left;
  line-height: 2.2rem;
  font-weight: 300;

  font-size: 1.3rem;
  color: rgb(87, 87, 87);
  /* 텍스트 색상 */
  font: sans-serif;
  padding: 0px 0px;
  text-align: justify;
}

.receipt-container {
  display: flex;
  flex-direction: column;
  /* 수직 방향으로 배치 */
  align-items: center;
  /* 가로로 가운데 정렬 */
  gap: 0px;
  /* 이미지 사이 간격 추가 */
  width: 100vw;
  min-height: 100vh;
  /* 최소 높이를 화면 전체로 설정 */
  overflow-y: auto;
  /* 스크롤 필요시 나타나도록 설정 */
  padding: 0px;
  box-sizing: border-box;
  /* 패딩을 포함하여 전체 크기 조정 */
}

.receipt-rec {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.responsive-image {
  width: auto;
  height: 90vh;
  /* 이미지 높이를 화면 높이의 90%로 설정 */
  max-width: 80vw;
  /* 이미지 너비를 화면 너비의 90%로 설정 */
  object-fit: contain;
  /* 이미지 비율 유지하며 화면에 맞춤 */
}

.receipt-icon {
  position: absolute;
  top: 338px;
  left: 1370px;
  width: 60px;
  height: 60px;
}

.card-wrapper {
  bottom: 0%;
  text-transform: 0;
  margin-top: 10px;
  display: flex;
  gap: 25px;
  justify-content: space-evenly;
  width: calc(350px * 3);
  opacity: 0;
  /* 처음에는 보이지 않도록 */
  transform: translateX(100%);
  /* 화면 왼쪽으로 이동된 상태로 시작 */
  transition: all 1.1s ease-out;
  /* 카드 너비 + 마진 * 카드 개수 */
}

.card {
  width: 300px;
  height: 687px;

  background-image: url('@/assets/images/reco-card-back.png');
  background-size: contain;
  /* 이미지가 카드 크기에 맞게 조정됨 */
  background-position: center;
  /* 이미지가 중앙에 위치 */
  background-repeat: no-repeat;
  /* 이미지가 반복되지 않음 */
  opacity: 0.9;

  font-family: 'Noto Sans KR';
  font-weight: 500;
  /* font-weight: ; */
  display: flex;
  justify-content: center;
  align-items: flex;
  font-size: 1.1rem;
  color: #363636;
  margin-top: 0px;
  padding: 0px;
  flex-shrink: 0;
  transition: transform 2s ease-out;
  text-align: left;
  gap: 25px;

}

.card-text {
  margin-top: 360px;
  margin-bottom: 0px;
  /* 상단에 마진 추가 */
  margin-left: 36px;
  line-height: 280%;
  letter-spacing: 0px;
}

.card-image img {
  position: absolute;
  top: 248px;
  left: 25px;
  width: 190px;
  height: 230px;
  size: contain;
  /* 이미지가 카드 크기에 맞게 조정됨 */
  position: top;
  /* 이미지가 중앙에 위치 */
  /* 이미지가 반복되지 않음 */
  opacity: 1;
}

.card-wrapper.animate-in {
  opacity: 1;
  /* 애니메이션 후에 투명도를 원래대로 */
  transform: translateX(0);
  /* 화면 안으로 원래 위치로 이동 */
}
</style>
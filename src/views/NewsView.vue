<template>
  <div class="container" v-if="article">
    <div class="divider"></div>
    <h1 class="title">{{ article.title }}</h1>
    <div class="meta">
      <span class="author">[{{ article.author }}]</span>
      <span class="category">[{{ article.대분야 }}]</span>
      <span class="date">{{ article.date }}</span>
    </div>
    <div class="content"></div>
    <img class="img" :src='article.imgUrl' alt="Image">
    <p class="content" v-for="(paragraph, idx) in article.content" :key="idx">
      {{ paragraph }}
    </p>
  </div>
</template>



<script>
import news from '@/assets/news.js';

export default {
  data() {
    return {
      id: parseInt(this.$route.params.id),
    };
  },
  computed: {
    article() {
      // console.log(news.forEach(item => console.log(item.id === this.id) ))
      return news.find(item => item.id === this.id)
    }
  },
  async beforeRouteUpdate(to, from) {
    // react to route changes...
    this.id = parseInt(to.params.id)
  },
  // ...
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Grandiflora+One&family=Noto+Serif+KR:wght@200..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Grandiflora+One&family=IBM+Plex+Sans+KR&family=Noto+Serif+KR:wght@200..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "IBM Plex Sans KR", sans-serif, Georgia;
  line-height: 150%;
  letter-spacing: 0px;
  font-weight: 300;

}

.container {
  max-width: 800px;
  margin: 00px auto;
  padding: 0 00px;
}

.divider {
  border-top: 2px solid #000;
  margin: 20px 0;
}

.title {
  font-size: 3.7rem;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.4;
  text-align: left;
  font-family: "IBM Plex Sans KR", sans-serif;
}

.meta {
  display: flex;
  align-items: right;
  gap: 30px;
  margin-bottom: 30px;
  color: #666;
  text-align: left;
}

.content img {
  width: 100%;
  max-width: 600px;
  height: auto;
  display: block;
  margin: 0 auto 25px;
}

.content {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #333;
  text-align: left;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.img {
  width: 800px;
  align: center;
}
</style>
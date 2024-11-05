<template>
  <div class="container" v-if="article">
    <div class="divider"></div>
    <h1 class="title">{{ article.title }}</h1>
    <div class="meta">
    <span class="author">{{ article.author }}</span>
    <span class="category">{{ article.tags }}</span>
    <span class="date">{{ article.date }}</span>    
    </div>
    <div class="content"></div>
    <img class="img" :src="article.imgUrl" alt="Image">
    <p class="content" v-for="(paragraph, idx) in article.content" :key="idx">
      {{ paragraph }}
    </p>
    </div>
    <!-- <p>기사: {{ article.content }}</p> -->
</template>



<script>
import news from '@/assets/news.js';

export default {
  data() {
    return {
      article: null,
    };
  },
  created() {
    const id = parseInt(this.$route.params.id); // 라우트 파라미터에서 id를 가져옵니다.
    this.article = news.find(item => item.id === id); // id에 해당하는 기사를 찾습니다.
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
  font-size: 3.2rem;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.4;
  text-align: left;
}

.meta {
  display: flex;
  align-items: end;
  gap: 20px;
  margin-bottom: 30px;
  color: #666;
  font-size: 1.1rem;
  text-align: left;
}

.content img {
  width: 100%;
  max-width: 600px;
  height: auto;
  display: block;
  margin: 0 auto 20px;
}

.content {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
  text-align: left;
}

.img {
  width: 800px;
  align: center;
}
</style>
<template>
  <div class="news" v-if="article">
    <h1>제목: {{ article.title }}</h1>
    <h2>기자: {{ article.author }}</h2>
    <p v-for="(paragraph, idx) in article.content" :key="idx">
      {{ paragraph }}
    </p>
    <!-- <p>기사: {{ article.content }}</p> -->
    <p>Tags: {{ article.tags }}</p>
  </div>
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

<style>
</style>
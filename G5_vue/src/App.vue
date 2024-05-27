<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<template>
  <header>
    <nav>
      <RouterLink to="/">首頁</RouterLink>
      <RouterLink to="/AboutusView">關於我們</RouterLink>
      <RouterLink to="/NewsView">最新活動</RouterLink>
      <RouterLink to="/DiaryView">健身日記</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: {
    RouterLink,
    RouterView,
    HelloWorld
  }
}
</script>


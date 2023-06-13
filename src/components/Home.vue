<script setup lang="ts">
import { router } from '../routes';

const navigationHandler = () => {
  //  router.push('/news/2023')
  router.push({
    name: 'news-route',
    params: {
      year: 2023,
    },
  });
};
</script>
<template>
  <h3>Home</h3>
  <button class="btn btn-primary" @click="navigationHandler">Go to News</button>
</template>

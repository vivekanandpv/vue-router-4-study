<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const navigationHandler = () => {
  //  router.push('/news/2023')
  router.push({
    path: `/news/${2023}`,
  });

  //  go forward by 1 record (any positive integer)
  //  router.go(1);   //  same as router.forward();

  // go back by 1 record (any negative integer),
  //  router.go(-1);  //  same as router.back();

  //  These fail silently if there aren't that many records!
  //  router.go(-999);
  //  router.go(10000);

  //  push, replace, go are the counterparts of the window.history API's
  //  pushState, replaceState, and go
  //  https://developer.mozilla.org/en-US/docs/Web/API/History_API
};
</script>
<template>
  <h3>Home</h3>
  <button class="btn btn-primary" @click="navigationHandler">Go to News</button>
</template>

<script setup lang="ts">
import { router } from '../routes';

const navigationHandler = () => {
  router.push('/about');
};
</script>
<template>
  <h3>Home</h3>
  <button class="btn btn-primary" @click="navigationHandler">
    Go to About
  </button>
</template>

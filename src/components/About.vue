<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const qp = route.query;
const fragment = route.hash;

</script>
<template>
  <h3>About</h3>
  <!-- <p>Query: {{ $route.query }}</p>
  <p>Fragment: {{ $route.hash }}</p> -->

  <p>Query: {{ qp }}</p>
  <p>Fragment: {{ fragment }}</p>
</template>

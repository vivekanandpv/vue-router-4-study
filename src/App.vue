<script setup lang="ts"></script>

<template>
  <div class="p-5">
    <h1>Vue App</h1>
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/news">News</router-link></li>
      <li><router-link to="/foo">Foo</router-link></li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<style scoped></style>

<script setup lang="ts"></script>

<template>
  <div class="p-5">
    <h1>Vue App</h1>
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/news">News</router-link></li>
      <li><router-link to="/user/123">User 123</router-link></li>
      <li>
        <router-link to="/user/123/profile">User 123 - Profile</router-link>
      </li>
      <li><router-link to="/user/123/logs">User 123 - Logs</router-link></li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<style scoped></style>

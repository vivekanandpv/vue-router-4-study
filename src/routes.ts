import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import News from './components/News.vue';
import About from './components/About.vue';
import NotFound from './components/NotFound.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/news/:year([1-2][0-9]{3})',
      component: News,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
  ],
});

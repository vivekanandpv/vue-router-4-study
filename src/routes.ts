import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import News from './components/News.vue';
import About from './components/About.vue';
import User from './components/User.vue';
import UserProfile from './components/UserProfile.vue';
import UserLogs from './components/UserLogs.vue';
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
      name: 'news-route',
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/user/:id(\\d+)',
      component: User,
      children: [
        {
          path: 'profile',
          component: UserProfile,
        },
        {
          path: 'logs',
          component: UserLogs,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
  ],
});

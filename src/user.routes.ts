import User from './components/User.vue';
import UserProfile from './components/UserProfile.vue';
import UserLogs from './components/UserLogs.vue';

export const userRoutes = {
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
};

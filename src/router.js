import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './components/HomeView.vue'; // Adjust the import according to your component structure
import BoxServicos from './components/BoxServicos.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
   

  {
    path: '/',
    name: 'servicos',
    component: BoxServicos,
  },


  // Add other routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

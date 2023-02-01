import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import EssentialOilsView from '@/views/EssentialOilsView.vue';
import ProductsView from '@/views/ProductsView.vue';
import AboutView from '@/views/AboutView.vue';
import NotThere from '@/views/NotThere.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/essential',
      name: 'essential',
      component: EssentialOilsView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/notthere',
      name: 'notthere',
      component: NotThere,
    },
  ],
});

export default router;

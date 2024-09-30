import { createRouter, createWebHistory } from 'vue-router'
import MenuList from '@/views/MenuList.vue'
import OrderList from '@/views/OrderList.vue'
import RandomCocktail from '@/views/RandomCocktail.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/lunchmenu',
      name: 'lunchmenu',
      component: MenuList
    },
    {
      path: '/appetizerlist',
      name: 'appetizerlist',
      component: MenuList
    },
    {
      path: '/cocktaillist',
      name: 'cocktaillist',
      component: MenuList
    },
    {
      path: '/winemenu',
      name: 'winemenu',
      component: MenuList
    },
    {
      path: '/order',
      name: 'order',
      component: OrderList,
    },
    {
      path: '/randomcocktail',
      name: 'random cocktail',
      component: RandomCocktail,
    },
  ]
})

export default router

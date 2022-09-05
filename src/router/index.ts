import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import("../views/login.vue"),
    },
    {
      path: '/home',
      redirect: 'home',
      component: () => import("../views/Layout.vue"),
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("../views/Home.vue"),
        },
        {
          path: "/review",
          name: "review",
          component: () => import("../views/Review.vue"),
        },
      ]
    },
  ]
})

export default router

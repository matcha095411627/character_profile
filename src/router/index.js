import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Front',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/NotFound.vue')
      },
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: 'about',
        component: () => import('@/views/AboutView.vue')
      },
      {
        path: 'profile',
        component: () => import('@/views/ProfileView.vue')
      },
      {
        path: 'profile/:nameId',
        component: () => import('@/views/CharacterView.vue')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router

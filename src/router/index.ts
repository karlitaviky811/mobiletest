import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'


const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    component: () => import('../views/login/LoginPage.vue')
  },

  {
    path: '/main',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: 'profile',
        component: () => import('../views/ProfilePage.vue')
      }
    ]
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue'),

      },
      { path: 'detail', component: () => import('@/views/Tab3Page.vue') },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'chat',
        component: () => import('@/views/ChatPage.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/Tab4PageView.vue')
      },

    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

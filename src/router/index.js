import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceView from '@/views/ServiceView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import BlogView from '@/views/BlogView.vue'
import BlogPostView from '@/views/BlogPostView.vue'
import TermsAndPrivacyView from '@/views/TermsAndPrivacyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: function (to) {
    if (to.hash) {
      return { el: to.hash }
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/services',
      children: [
        {
          path: ':id',
          name: 'service',
          component: ServiceView
        }
      ]
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/blog/:id',
      name: 'blog-post',
      component: BlogPostView
    },
    {
      path: '/terms-and-privacy',
      name: 'terms-and-privacy',
      component: TermsAndPrivacyView
    },
    {
      path: '/:id',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

export default router

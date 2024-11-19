import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/usuarios-list',
      name: 'usuarios-list',
      component: () => import('@/views/UsuariosList.vue')
    },
    {
      path: '/usuarios-form/:id?',
      name: 'usuarios-form',
      component: () => import('@/views/UsuariosForm.vue')
    },
    {
      path: '/',
      redirect:'/usuarios-list'
    }
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditC from '../views/EditC.vue'
import RegisterC from '../views/RegisterC.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView

    },
   {

    path: '/register',
    name: 'register',
    component: RegisterC

   },
   {
    path: '/edit',
    name: 'edit',
    component: EditC
   }
  
  ]
})

export default router

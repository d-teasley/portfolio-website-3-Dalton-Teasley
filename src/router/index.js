import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/Home.vue'
import About from '../components/About.vue'
import PortfolioPage from '../components/PortfolioPage.vue'
import Contact from '../components/Contact.vue'
import GamePage from '../components/GamePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: About },
  { path: '/portfolio', component: PortfolioPage },
  { path: '/contact', component: Contact },
  { path: '/surprise', component: GamePage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

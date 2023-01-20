import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthorsView from '../views/AuthorsView.vue'
import BooksView from '../views/BooksView.vue'
import AddBookView from '../views/AddBookView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import AuthorView from '../views/AuthorView.vue'
import BookView from '../views/BookView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/autores',
      name: 'AuthorsView',
      component: AuthorsView,
    },
    {
      path: '/autor/:id',
      name: 'AuthorView',
      component: AuthorView,
      props: true,
    },
    {
      path: '/libros',
      name: 'BooksView',
      component: BooksView,
    },
    {
      path: '/libro/:id',
      name: 'BookView',
      component: BookView,
      props: true,
    },
    {
      path: '/anyadir-libro',
      name: 'AddBookView',
      component: AddBookView,
    },
    {
      path: '/sobre-nosotros',
      name: 'AboutUsView',
      component: AboutUsView,
    },
  ]
})

export default router

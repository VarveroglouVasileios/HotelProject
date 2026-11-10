import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  // Hash history: works on GitHub Pages without server-side route fallbacks.
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('./views/HomeView.vue') },
    { path: '/rooms', name: 'rooms', component: () => import('./views/RoomsView.vue') },
    { path: '/room/:id', name: 'room', component: () => import('./views/RoomDetailView.vue') },
    { path: '/book/:roomId', name: 'book', component: () => import('./views/BookView.vue') },
    { path: '/confirmation/:ref', name: 'confirmation', component: () => import('./views/ConfirmationView.vue') },
    { path: '/admin', name: 'admin', component: () => import('./views/AdminView.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior: (to) => {
    if (to.hash) return { el: to.hash, top: 120, behavior: 'smooth' }
    return { top: 0 }
  },
})

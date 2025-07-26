import { createRouter, createWebHistory } from 'vue-router'

const routes = [ 
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/HomePage.vue"),
  },
  {
  path: "/",
  redirect: "/home"
  },
  {
    path: "/countryCards",
    name: "countryCards",
    component: () => import("@/views/CountryCards.vue")
  },
  {
    path: "/countryCards/favorite",
    name: "favoriteCountries",
    component: () => import("@/views/FavoriteCountries.vue")
  },
  {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import("@/views/NotFound.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Scroll behaviour option
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => resolve({ top: 0 }), 300)
    })
  }
})

export default router

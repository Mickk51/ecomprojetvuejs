import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/PageAcceuil.vue";
import Items from "../pages/Item-liste.vue";
import Connexion from "../pages/Connexion-page.vue";
import Panier from "../pages/Panier-page.vue";
import About from "../pages/About-page.vue";


const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/produits",
    component: Items,
  },
  {
    path: "/connexion",
    component: Connexion,
  },
  {
    path: "/panier",
    component: Panier,
  },
  {
    path: "/about",
    component: About,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

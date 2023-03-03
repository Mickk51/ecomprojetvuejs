import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/PageAcceuil.vue";
import Items from "../pages/Products-page.vue";
import Connexion from "../pages/Connexion-page.vue";
import Panier from "../pages/Panier-page.vue";
import About from "../pages/About-page.vue";
import CreateAccountForm from "../pages/Create-account-form.vue";
import AdministrationPage from "../pages/Admin-page.vue";
import ItemsListAdmin from "../components/admin/Items-list-admin.vue"
import UsersListAdmin from '@/components/admin/Users-list-admin.vue'
import DashBoardAdmin from "@/components/admin/Dash-board-admin.vue";
import CreateItemAdmin from "@/components/admin/Create-item-admin.vue"

const routes = [
  {
    path: "/",
    component: Home,
  },  
  {
    path: "/items",
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
  {
    path: "/create-account-form",
    component: CreateAccountForm,
  },
  {
    path: "/administration-page",
    component: AdministrationPage,
    children: [
      {
        path: "/users-list-admin",
        component: UsersListAdmin,
      },
      {
        path: "/items-list-admin",
        component: ItemsListAdmin,
      },
      {
        path: "/dash-board-admin",
        component: DashBoardAdmin,
      },
      {
        path: '/create-item-admin',
        component: CreateItemAdmin,
      }
    ]
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

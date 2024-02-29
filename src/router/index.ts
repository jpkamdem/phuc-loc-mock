import { createRouter, createWebHistory } from "vue-router";
import Carte from "@/views/Carte.vue";
import HomeView from "@/views/HomeView.vue";
import Infos from "@/views/Infos.vue";
import Panier from "@/views/Panier.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: 'Home', component: HomeView },
    { path: "/carte", name: 'Carte', component: Carte },
    { path: "/infos", name: 'Infos', component: Infos },
    { path: "/panier", name:'Panier', component: Panier },
  ],
});

export default router;

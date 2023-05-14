import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../views/AboutView.vue"),
        },
        {
            path: "/price",
            name: "price",
            component: () => import("../views/PriceView.vue"),
        },
        {
            path: "/contacts",
            name: "contacts",
            component: () => import("../views/ContactsView.vue"),
        },
        {
            path: "/services",
            name: "services",
            component: () => import("../views/ServicesView.vue"),
        },
    ],
});

export default router;

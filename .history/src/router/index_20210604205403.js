import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import Welcome from "../components/Welcome";

const routes = [
  {
    path: "/",
    name: "welcome",
    beforeEnter: (to, from, next) => {
      if (localStorage.email && localStorage.password) next();
      else next({ name: "Login" });
    },
    component: Welcome,
  },
  {
    path: "/:catchAll(.*)",
    name: "notfound",
    component: NotFound,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/404",
    name: "notfound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
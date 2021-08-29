import { createApp } from "vue";
import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw
} from "vue-router";

import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const routes: Array<RouteRecordRaw> = [];
const router: Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

createApp(App)
  .use(router)
  .mount("#app");

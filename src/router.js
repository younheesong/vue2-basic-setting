import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => {
    if (err.name !== "NavigationDuplicated") throw err;
  });
};

const router = new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      redirect: "main",
      //component: () => import("@/layouts/full-layout/MainLayout"),
      children: [
        {
          //   name: "Dashboard",
          //   path: "dashboard",
          //component: () => import("@/"),
        },
      ],
    },
  ],
});

export default router;

//需要权限验证的路由
// export const appRouter = {
//   path: "/",
//   name: "root",
//   component: () => import("@/views"),
//   redirect: "/home",
//   children: [
//     {
//       path: "home",
//       name: "home",
//       label: "太极",
//       component: () => import("@/views/Taichi/index.vue")
//     }
//   ]
// };

export const commonRouters = [
  {
    path: "/HelloWorld",
    name: "HelloWorld",
    label: "HelloWorld",
    component: () => import("@/components/HelloWorld")
  },

  {
    path: "/index",
    name: "index",
    label: "index",
    component: () => import("@/views/main")
  },

  { path: "/", redirect: "/index" }
];

// export const routers = [appRouter, ...commonRouters];
export const routers = [...commonRouters];

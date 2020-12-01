export default [
  {
    path: "/demo1",
    name: "demo1",
    title: "双向绑定弹窗",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Demo1.vue")
  },
  {
    path: "/demo2",
    name: "demo2",
    title: "node连接mysql",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Demo2.vue")
  },
  {
    path: "/demo3",
    name: "demo3",
    title: "tabel封装",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Demo3.vue")
  }
];

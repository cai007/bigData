const rootRouter = [
  {
    name: "bigData",
    path: "/",
    component: () => import("pages/BigData/index.vue")
  }
];

export default rootRouter;

import { lazy } from "react";
const GlobalRoutes = [
  {
    path: "/",
    component: lazy(() => import("../pages/App/Dashboard/Index")),
    exact: true,
    childRouters: [],
  },
  {
    path: "/component",
    component: lazy(() => import("../pages/Ui/Main")),
    exact: true,
    childRouters: [
      {
        cpath: "button",
        exact: true,
        component: lazy(() => import("../pages/Ui/ButtonCom")),
      },
      {
        cpath: "form",
        exact: true,
        component: lazy(() => import("../pages/Ui/FormCom")),
      },
      {
        cpath: "divider",
        exact: true,
        component: lazy(() => import("../pages/Ui/DividerCom")),
      },
      {
        cpath: "carousel",
        exact: true,
        component: lazy(() => import("../pages/Ui/CarouselCom")),
      },
      {
        cpath: "empty",
        exact: true,
        component: lazy(() => import("../pages/Ui/EmptyCom")),
      },
    ],
  },
];
export default GlobalRoutes;

import { UserLayout } from "~/components/Layout";
import { Home } from "~/pages";

const publicRoutes = [
  {
    path: "/",
    component: Home,
    layout: UserLayout,
  },
  {
    path: "/product-detail/:id",
    component: Pr,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

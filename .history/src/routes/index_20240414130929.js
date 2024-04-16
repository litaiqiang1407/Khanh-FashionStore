import { UserLayout } from "~/components/Layout";
import { Home, Login, ProductDetail } from "~/pages";

const publicRoutes = [
  {
    path: "/",
    component: Home,
    layout: UserLayout,
  },
  {
    path: "/product-detail/:id",
    component: ProductDetail,
    layout: UserLayout,
  },
  {
    path: "/login",
    component: Login,
    layout: UserLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

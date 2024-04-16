import { UserLayout } from "~/components/Layout";
import { Home, Login, ProductDetail } from "~/pages";
import Signup from "~/pages/Signup";

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
  {
    path: "/signup",
    component: Signup,
    layout: UserLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

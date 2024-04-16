import { UserLayout } from "~/components/Layout";
import {
  Home,
  Login,
  Signup,
  ProductDetail,
  Contact,
  Profile,
  Cart,
} from "~/pages";

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
  {
    path: "/contact",
    component: Contact,
    layout: UserLayout,
  },
  {
    path: "/profile",
    component: Profile,
    layout: UserLayout,
  },
  {
    path: "/cart",
    component: Cart,
    layout: UserLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

import UserLayout from "~/components/Layout/UserLayout";
import { Home } from "~/pages";

const publicRoutes = [
  {
    path: "/",
    component: Home,
    layout: UserLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

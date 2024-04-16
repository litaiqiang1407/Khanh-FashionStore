import { Home } from "~/pages";

const publicRoutes = [
  {
    path: "/",
    component: Home,
    layout: UserL,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

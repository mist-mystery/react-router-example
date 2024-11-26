import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("products/:pid", "./product.tsx"),
] satisfies RouteConfig;

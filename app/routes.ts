import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("home", "routes/home.tsx"),
  route("todo", "routes/todo.tsx"),
] satisfies RouteConfig;

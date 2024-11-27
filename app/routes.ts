import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("products", "./product.tsx"),
  route("api/person", "./api/person.ts"),
  route("api/comment/:id", "./api/comment.ts"),
] satisfies RouteConfig;

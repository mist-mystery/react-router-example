import { Route } from "./+types/person";

const data = [
  { id: 1, name: "Alice", hobbit: "React" },
  { id: 2, name: "Bob", hobbit: "Vue" },
] as const;

export const loader = async ({ params }: Route.LoaderArgs) => {
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
};

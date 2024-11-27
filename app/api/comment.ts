import { Route } from "./+types/comment";

const data = [
  { id: 1, pid: 1, comment: "My name is Alice." },
  { id: 2, pid: 1, comment: "I like React." },
  { id: 3, pid: 2, comment: "Hello, I'm Bob." },
] as const;

export const loader = async ({ params }: Route.LoaderArgs) => {
  const comment = data.find((d) => d.pid === Number(params.id));
  return new Response(JSON.stringify(comment), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
};

import type { Route } from "./+types/product";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  return Number(params.pid);
}

export default function Product({ loaderData }: Route.ComponentProps) {
  return (
    <select>
      {[...new Array(loaderData)].map((_, i) => (
        <option key={i} value={i}>
          {i}
        </option>
      ))}
    </select>
  );
}

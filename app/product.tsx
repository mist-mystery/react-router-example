import { Form } from "react-router";
import type { Route } from "./+types/product";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const res = await fetch("/api/person");
  const person = await res.json();
  if (Array.isArray(person)) {
    return person;
  }
  throw new Error("Invalid ReturnType");
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();
  const personId = formData.get("person");
  const res = await fetch(`/api/comment/${personId}`);
  const comment: unknown = await res.json();
  if (typeof comment === "object" && comment && "comment" in comment) {
    return typeof comment.comment === "string" ? comment.comment : undefined;
  }
  return;
}

export default function Product({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  return (
    <>
      <Form method="post">
        <select name="person">
          {loaderData?.map((v, i) => (
            <option key={v.id} value={v.id}>
              {v.name}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </Form>
      <p>{actionData}</p>
    </>
  );
}

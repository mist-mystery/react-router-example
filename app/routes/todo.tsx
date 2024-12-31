import { Lists } from "~/todo/lists";

export function meta() {
  return [{ title: "Todo" }];
}

export default function Todo() {
  return (
    <>
      <h1>Todo Page</h1>
      <Lists />
    </>
  );
}

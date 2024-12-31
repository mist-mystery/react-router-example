import { useState, type FC } from "react";

const items = [
  { id: 1, name: "Buy Milk" },
  { id: 2, name: "Buy Bread" },
  { id: 3, name: "Buy Butter" },
];

export const Lists: FC = () => {
  const [checks, setChecks] = useState<number[]>([]);
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={checks.includes(item.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setChecks([...checks, item.id]);
                  } else {
                    setChecks(checks.filter((id) => id !== item.id));
                  }
                }}
              />
              {item.name}
            </label>
          </li>
        ))}
      </ul>
      <p>{checks.length === items.length ? "Completed" : ""}</p>
    </>
  );
};

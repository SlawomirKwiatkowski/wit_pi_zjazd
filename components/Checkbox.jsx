"use client";

import { useRouter } from "next/navigation";

export default function Checkbox({ id, name, checked }) {
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/ListElements/${id}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, checked: !checked }),
      });

      if (!res.ok) {
        throw new Error("Failed to update ListElements");
      }
      console.log("res", res);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <input type="checkbox" onChange={(e) => handleClick(e)} checked={checked} />
  );
}

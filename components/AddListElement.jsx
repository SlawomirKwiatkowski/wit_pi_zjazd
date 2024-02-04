"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import manageList from "../libs/manageList";

export default async function AddListElement() {
  const inputRef = useRef(null);
  const router = useRouter();
  console.log("render AddListElement");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("e", e);
    try {
      if (!inputRef.current) {
        return null;
      }
      const res = await fetch(`http://localhost:3000/api/ListElements`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name: inputRef.current.value }),
      });
      inputRef.current.value = "";
      if (!res.ok) {
        throw new Error("Failed to add ListElement");
      }
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex">
      <input
        ref={inputRef}
        type="text"
        name="name"
        placeholder="Enter list Element"
      />
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        AddElement
      </button>
    </form>
  );
}

import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import Checkbox from "./Checkbox";

const getList = async () => {
  console.log("getList");
  try {
    const res = await fetch("http://localhost:3000/api/ListElements", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch ListElements");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading ListElements: ", error);
  }
};

export default async function ShoppingList() {
  const { listElements } = await getList();

  return (
    <>
      {listElements &&
        listElements.map((listElement) => (
          <div
            key={listElement._id}
            className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
          >
            <Checkbox
              id={listElement._id}
              name={listElement.name}
              checked={listElement.checked}
            />
            <div>
              <h2 className="font-bold text-2xl">{listElement.name}</h2>
            </div>

            <div className="flex gap-2">
              <RemoveBtn id={listElement._id} />
            </div>
          </div>
        ))}
    </>
  );
}

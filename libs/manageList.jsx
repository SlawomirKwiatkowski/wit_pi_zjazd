"use client";
import { useState } from "react";

const manageList = () => {
  const [listElements, setListElements] = useState({});
  const getList = async () => {
    console.log("getList");
    try {
      const res = await fetch("http://localhost:3000/api/ListElements", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch ListElements");
      }

      setListElements(res.json().listElements);
    } catch (error) {
      console.log("Error loading ListElements: ", error);
    }
  };
  return { listElements, getList };
};

export default manageList;

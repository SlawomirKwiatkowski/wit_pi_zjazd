import connectMongoDB from "@/libs/mongodb";
import ListElement from "@/models/ListElement";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  const { id } = params;
  console.log("id", id);
  const { name, checked } = await request.json();

  console.log("newName", name);
  console.log("newChecked", checked);
  await connectMongoDB();
  const weq = await ListElement.findByIdAndUpdate(
    id,
    { name, checked: checked },
    null
  );
  console.log("weq", weq);
  return NextResponse.json({ message: "ListElement updated" }, { status: 200 });
}

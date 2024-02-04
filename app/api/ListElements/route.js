import connectMongoDB from "@/libs/mongodb";
import ListElement from "@/models/ListElement";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name } = await request.json();
  console.log("name", name);
  await connectMongoDB();
  const newListElement = new ListElement({ name: name, checked: false });
  console.log("newListElement", newListElement);
  newListElement.save().catch((err) => console.log(err));
  return NextResponse.json({ message: "ListElement Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const listElements = await ListElement.find();
  console.log("listElements", listElements);
  return NextResponse.json({ listElements }, { status: 200 });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await ListElement.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "listElements deleted" },
    { status: 200 }
  );
}

import mongoose, { Schema } from "mongoose";

const ListElementSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    required: true,
  },
});

const ListElement =
  mongoose.models.ListElement ||
  mongoose.model("ListElement", ListElementSchema);
export default ListElement;

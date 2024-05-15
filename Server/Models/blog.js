import { mongoose } from "mongoose";
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    discription: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Blog", blogSchema);

import { mongoose } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    discription: {
      type: String,
      required: true,
      unique: false,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    image: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
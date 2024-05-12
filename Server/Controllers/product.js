import asyncHandler from "express-async-handler";
import Products from "../Models/product.js";
import slugify from "slugify";

const getAll = asyncHandler(async (req, res) => {
  const product = await Products.find({});
  if (product.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No products found",
    });
  }
  return res.status(200).json({
    success: true,
    data: product,
  });
});

const getOne = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = Products.findById(id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  return res.status(200).json(product);
});
const createProduct = asyncHandler(async (req, res) => {
  if (Object.keys(req.body).length === 0) throw new Error("Missing input");
  if (req.body && req.body.title) req.body.slug = slugify(req.body.title);
  const newProduct = await Products.create(req.body);
  return res.status(200).json({
    success: newProduct ? true : false,
    createProduct: newProduct ? newProduct : "Cannot create product",
  });
});


export { getAll, getOne, createProduct };

import express from "express";
import * as Ctrls from "../Controllers/product.js";

const productRouter = express.Router();
productRouter.get("/", Ctrls.getAll);
productRouter.get("/:id", Ctrls.getOne);
productRouter.post("", Ctrls.createProduct);
export default productRouter;

import express from "express";
import userRouter from "./userRouter.js";
import productRouter from "./productRouter.js";

const initRoute = (app) => {
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/product", productRouter);
  
};
export default initRoute;

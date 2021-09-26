import express from "express";
import { Application } from "express";
import { errorHandler } from "../middleware/error";
import userRouter from "../api/user/route";

export default function (app: Application) {
  app.use(express.json());
  app.use(function (_req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
  });

  app.use("/api/users", userRouter);
  app.use(errorHandler);
}

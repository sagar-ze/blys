import { Application } from "express";
import { errorHandler } from "../middleware/error";
import movies from "../api/user/resolver";

export default function (app: Application) {
  app.use("/api/user", movies);
  app.use(errorHandler);
}

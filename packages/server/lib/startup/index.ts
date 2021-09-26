import express, { Application, Request, Response } from "express";
import routes from "./routes";

const app: Application = express();
routes(app);

//endpoint to check the health of the application
app.get("/health", (_req: Request, res: Response) => {
  res.status(200).send({ status: "active" });
});

export default app;

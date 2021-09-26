import express, { Response, Request, NextFunction, Router } from "express";

const router: express.Router = express.Router();

router.post("/verify", (req: Request, res: Response) => {
  console.log(req.body, "req");
});

export default router;

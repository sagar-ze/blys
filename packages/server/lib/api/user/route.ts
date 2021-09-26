import express, { Response, Request } from "express";
import { validateInput } from "../../middleware/inputValidator";
import { otpVerificationSchema } from "./validation";

const router: express.Router = express.Router();

router.post(
  "/verify",
  validateInput(otpVerificationSchema),
  (_req: Request, res: Response) => {
    // mock the database write
    setTimeout(() => {
      res.status(200).send("User verified!");
    }, 3000);
  }
);

export default router;

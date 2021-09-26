import { NextFunction, Request, Response } from "express";

const options = {
  errors: {
    wrap: {
      label: "",
    },
  },
};
export const validateInput = (schema: any, allowUnknown = true) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { ...options, allowUnknown });
    if (error) return res.status(422).send(error.details[0].message);

    return next();
  };
};

import * as Joi from "joi";

export const otpVerificationSchema = Joi.object({
  otp: Joi.string()
    .length(6)
    .pattern(/\d{5}[0-6,8,9]/),
});

import * as Joi from "joi";

export const otpVerificationSchema = Joi.object({
  otp: Joi.string()
    .length(6)
    .pattern(/\d{5}[0-6,8,9]/)
    //@ts-ignore
    .message({ "string.pattern.base": "Last digit of the OTP should not be 7" })
    .label("OTP"),
});

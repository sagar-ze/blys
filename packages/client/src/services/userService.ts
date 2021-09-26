import { userVerificationEndpoint } from "../config/endpoints";
import http from "./httpService";

class UserService {
  verifyUser = async (otp: string) => {
    const { data } = await http.post(userVerificationEndpoint, { otp });
    return data;
  };
}

export default new UserService();

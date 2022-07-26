import grpc from "@grpc/grpc-js";
import { LoginRequest } from "../../proto/generated/LoginRequest";
import { LoginResponse } from "../../proto/generated/LoginResponse";
import jwt from "jsonwebtoken";
export class Auth {
  public async Login(
    call: grpc.ServerUnaryCall<LoginRequest, LoginResponse>,
    callback: grpc.sendUnaryData<LoginResponse>
  ): Promise<void> {
    const { password, email } = call.request;
    if (password === "123" && email === "123") {
      const token = jwt.sign({ email: email }, "secret", { expiresIn: "1h" });
      return callback(null, { success: true, token: token });
    } else {
      return callback(null, { success: false, token: "yuq sanga token" });
    }
  }
  public async changePassword() {
    return "change password";
  }
  public async register() {
    return "register";
  }
  public async resetPassword() {
    return "reset password";
  }
}

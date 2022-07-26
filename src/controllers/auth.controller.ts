import { Auth } from "../services/auth.service";
import { AuthServiceHandlers } from "../../proto/generated/AuthService";
const auth = new Auth();
export const AuthHandlers: AuthServiceHandlers = {
  ChangePassword: auth.changePassword,
  Login: auth.Login,
  Register: auth.register,
  ResetPassword: auth.resetPassword,
};

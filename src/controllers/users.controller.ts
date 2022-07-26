import { Users } from "../services/users.service";
import { UserServiceHandlers } from "../../proto/generated/UserService";
const users = new Users();
export const UserHandlers: UserServiceHandlers = {
  CreateUser: users.createUser,
  GetUser: users.getUserById,
  GetUsers: users.getUsers,
};

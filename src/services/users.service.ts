import { GetUserRequest } from "../../proto/generated/GetUserRequest";
import grpc from "@grpc/grpc-js";
import { GetUserResponse } from "../../proto/generated/GetUserResponse";
import { GetUsersRequest } from "../../proto/generated/GetUsersRequest";
import { GetUsersResponse } from "../../proto/generated/GetUsersResponse";
import { CreateUserRequest } from "../../proto/generated/CreateUserRequest";
import { CreateUserResponse } from "../../proto/generated/CreateUserResponse";
const users: CreateUserRequest[] = [];
export class Users {
  public async getUserById(
    call: grpc.ServerUnaryCall<GetUserRequest, GetUserResponse>,
    callback: grpc.sendUnaryData<GetUserResponse>
  ) {
    const { id } = call.request;
    let a = users.findIndex((user) => user.id === id);
    callback(null, users[a]);
  }
  public async getUsers(
    call: grpc.ServerUnaryCall<GetUsersRequest, GetUsersResponse>,
    callback: grpc.sendUnaryData<GetUsersResponse>
  ) {
    const value = call.request.limit;
    callback(null, { users: users.slice(0, value) });
  }
  public async createUser(
    call: grpc.ServerUnaryCall<CreateUserRequest, CreateUserResponse>,
    callback: grpc.sendUnaryData<CreateUserResponse>
  ) {
    const { age, email, id, name, password, phone } = call.request;
    let uid = Math.round(Math.random() * 100);
    users.push({ age, email, id: uid.toString(), name, password, phone });
    let a = users.findIndex((user) => user.id === uid.toString());
    callback(null, users[a]);
  }
}

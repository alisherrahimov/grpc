import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _AuthServiceClient, AuthServiceDefinition as _AuthServiceDefinition } from './AuthService';
import type { UserServiceClient as _UserServiceClient, UserServiceDefinition as _UserServiceDefinition } from './UserService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  AuthService: SubtypeConstructor<typeof grpc.Client, _AuthServiceClient> & { service: _AuthServiceDefinition }
  ChangePasswordRequest: MessageTypeDefinition
  ChangePasswordResponse: MessageTypeDefinition
  ChatRequestMessage: MessageTypeDefinition
  ChatResponseMessage: MessageTypeDefinition
  CreateUserRequest: MessageTypeDefinition
  CreateUserResponse: MessageTypeDefinition
  FileStreamRequestMessage: MessageTypeDefinition
  FileStreamResponseMessage: MessageTypeDefinition
  GetUserRequest: MessageTypeDefinition
  GetUserResponse: MessageTypeDefinition
  GetUsersRequest: MessageTypeDefinition
  GetUsersResponse: MessageTypeDefinition
  LoginRequest: MessageTypeDefinition
  LoginResponse: MessageTypeDefinition
  RegisterRequest: MessageTypeDefinition
  RegisterResponse: MessageTypeDefinition
  ResetPasswordRequest: MessageTypeDefinition
  ResetPasswordResponse: MessageTypeDefinition
  UserService: SubtypeConstructor<typeof grpc.Client, _UserServiceClient> & { service: _UserServiceDefinition }
}


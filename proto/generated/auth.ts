import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _AuthServiceClient, AuthServiceDefinition as _AuthServiceDefinition } from './AuthService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  AuthService: SubtypeConstructor<typeof grpc.Client, _AuthServiceClient> & { service: _AuthServiceDefinition }
  ChangePasswordRequest: MessageTypeDefinition
  ChangePasswordResponse: MessageTypeDefinition
  LoginRequest: MessageTypeDefinition
  LoginResponse: MessageTypeDefinition
  RegisterRequest: MessageTypeDefinition
  RegisterResponse: MessageTypeDefinition
  ResetPasswordRequest: MessageTypeDefinition
  ResetPasswordResponse: MessageTypeDefinition
}


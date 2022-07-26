// Original file: proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateUserRequest as _CreateUserRequest, CreateUserRequest__Output as _CreateUserRequest__Output } from './CreateUserRequest';
import type { CreateUserResponse as _CreateUserResponse, CreateUserResponse__Output as _CreateUserResponse__Output } from './CreateUserResponse';
import type { GetUserRequest as _GetUserRequest, GetUserRequest__Output as _GetUserRequest__Output } from './GetUserRequest';
import type { GetUserResponse as _GetUserResponse, GetUserResponse__Output as _GetUserResponse__Output } from './GetUserResponse';
import type { GetUsersRequest as _GetUsersRequest, GetUsersRequest__Output as _GetUsersRequest__Output } from './GetUsersRequest';
import type { GetUsersResponse as _GetUsersResponse, GetUsersResponse__Output as _GetUsersResponse__Output } from './GetUsersResponse';

export interface UserServiceClient extends grpc.Client {
  CreateUser(argument: _CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  CreateUser(argument: _CreateUserRequest, callback: grpc.requestCallback<_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _CreateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _CreateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _CreateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  createUser(argument: _CreateUserRequest, callback: grpc.requestCallback<_CreateUserResponse__Output>): grpc.ClientUnaryCall;
  
  GetUser(argument: _GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _GetUserRequest, callback: grpc.requestCallback<_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _GetUserRequest, callback: grpc.requestCallback<_GetUserResponse__Output>): grpc.ClientUnaryCall;
  
  GetUsers(argument: _GetUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_GetUsersResponse__Output>): grpc.ClientUnaryCall;
  GetUsers(argument: _GetUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_GetUsersResponse__Output>): grpc.ClientUnaryCall;
  GetUsers(argument: _GetUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_GetUsersResponse__Output>): grpc.ClientUnaryCall;
  GetUsers(argument: _GetUsersRequest, callback: grpc.requestCallback<_GetUsersResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _GetUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_GetUsersResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _GetUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_GetUsersResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _GetUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_GetUsersResponse__Output>): grpc.ClientUnaryCall;
  getUsers(argument: _GetUsersRequest, callback: grpc.requestCallback<_GetUsersResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateUser: grpc.handleUnaryCall<_CreateUserRequest__Output, _CreateUserResponse>;
  
  GetUser: grpc.handleUnaryCall<_GetUserRequest__Output, _GetUserResponse>;
  
  GetUsers: grpc.handleUnaryCall<_GetUsersRequest__Output, _GetUsersResponse>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  CreateUser: MethodDefinition<_CreateUserRequest, _CreateUserResponse, _CreateUserRequest__Output, _CreateUserResponse__Output>
  GetUser: MethodDefinition<_GetUserRequest, _GetUserResponse, _GetUserRequest__Output, _GetUserResponse__Output>
  GetUsers: MethodDefinition<_GetUsersRequest, _GetUsersResponse, _GetUsersRequest__Output, _GetUsersResponse__Output>
}

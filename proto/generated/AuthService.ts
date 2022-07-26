// Original file: proto/auth.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ChangePasswordRequest as _ChangePasswordRequest, ChangePasswordRequest__Output as _ChangePasswordRequest__Output } from './ChangePasswordRequest';
import type { ChangePasswordResponse as _ChangePasswordResponse, ChangePasswordResponse__Output as _ChangePasswordResponse__Output } from './ChangePasswordResponse';
import type { LoginRequest as _LoginRequest, LoginRequest__Output as _LoginRequest__Output } from './LoginRequest';
import type { LoginResponse as _LoginResponse, LoginResponse__Output as _LoginResponse__Output } from './LoginResponse';
import type { RegisterRequest as _RegisterRequest, RegisterRequest__Output as _RegisterRequest__Output } from './RegisterRequest';
import type { RegisterResponse as _RegisterResponse, RegisterResponse__Output as _RegisterResponse__Output } from './RegisterResponse';
import type { ResetPasswordRequest as _ResetPasswordRequest, ResetPasswordRequest__Output as _ResetPasswordRequest__Output } from './ResetPasswordRequest';
import type { ResetPasswordResponse as _ResetPasswordResponse, ResetPasswordResponse__Output as _ResetPasswordResponse__Output } from './ResetPasswordResponse';

export interface AuthServiceClient extends grpc.Client {
  ChangePassword(argument: _ChangePasswordRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ChangePasswordResponse__Output>): grpc.ClientUnaryCall;
  ChangePassword(argument: _ChangePasswordRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ChangePasswordResponse__Output>): grpc.ClientUnaryCall;
  ChangePassword(argument: _ChangePasswordRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ChangePasswordResponse__Output>): grpc.ClientUnaryCall;
  ChangePassword(argument: _ChangePasswordRequest, callback: grpc.requestCallback<_ChangePasswordResponse__Output>): grpc.ClientUnaryCall;
  changePassword(argument: _ChangePasswordRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ChangePasswordResponse__Output>): grpc.ClientUnaryCall;
  changePassword(argument: _ChangePasswordRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ChangePasswordResponse__Output>): grpc.ClientUnaryCall;
  changePassword(argument: _ChangePasswordRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ChangePasswordResponse__Output>): grpc.ClientUnaryCall;
  changePassword(argument: _ChangePasswordRequest, callback: grpc.requestCallback<_ChangePasswordResponse__Output>): grpc.ClientUnaryCall;
  
  Login(argument: _LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _LoginRequest, callback: grpc.requestCallback<_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _LoginRequest, callback: grpc.requestCallback<_LoginResponse__Output>): grpc.ClientUnaryCall;
  
  Register(argument: _RegisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _RegisterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _RegisterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _RegisterRequest, callback: grpc.requestCallback<_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _RegisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _RegisterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _RegisterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _RegisterRequest, callback: grpc.requestCallback<_RegisterResponse__Output>): grpc.ClientUnaryCall;
  
  ResetPassword(argument: _ResetPasswordRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ResetPasswordResponse__Output>): grpc.ClientUnaryCall;
  ResetPassword(argument: _ResetPasswordRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ResetPasswordResponse__Output>): grpc.ClientUnaryCall;
  ResetPassword(argument: _ResetPasswordRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ResetPasswordResponse__Output>): grpc.ClientUnaryCall;
  ResetPassword(argument: _ResetPasswordRequest, callback: grpc.requestCallback<_ResetPasswordResponse__Output>): grpc.ClientUnaryCall;
  resetPassword(argument: _ResetPasswordRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ResetPasswordResponse__Output>): grpc.ClientUnaryCall;
  resetPassword(argument: _ResetPasswordRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ResetPasswordResponse__Output>): grpc.ClientUnaryCall;
  resetPassword(argument: _ResetPasswordRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ResetPasswordResponse__Output>): grpc.ClientUnaryCall;
  resetPassword(argument: _ResetPasswordRequest, callback: grpc.requestCallback<_ResetPasswordResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  ChangePassword: grpc.handleUnaryCall<_ChangePasswordRequest__Output, _ChangePasswordResponse>;
  
  Login: grpc.handleUnaryCall<_LoginRequest__Output, _LoginResponse>;
  
  Register: grpc.handleUnaryCall<_RegisterRequest__Output, _RegisterResponse>;
  
  ResetPassword: grpc.handleUnaryCall<_ResetPasswordRequest__Output, _ResetPasswordResponse>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  ChangePassword: MethodDefinition<_ChangePasswordRequest, _ChangePasswordResponse, _ChangePasswordRequest__Output, _ChangePasswordResponse__Output>
  Login: MethodDefinition<_LoginRequest, _LoginResponse, _LoginRequest__Output, _LoginResponse__Output>
  Register: MethodDefinition<_RegisterRequest, _RegisterResponse, _RegisterRequest__Output, _RegisterResponse__Output>
  ResetPassword: MethodDefinition<_ResetPasswordRequest, _ResetPasswordResponse, _ResetPasswordRequest__Output, _ResetPasswordResponse__Output>
}

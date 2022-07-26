import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "../proto/generated/user";
import path from "path";
import { AuthHandlers } from "./controllers/auth.controller";
import { UserHandlers } from "./controllers/users.controller";
const port = 8080 as number;
const server = new grpc.Server();
const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, "../proto/index.proto")
);
const grpcObj = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;
const userService = grpcObj.UserService;
const authService = grpcObj.AuthService;

function main() {
  server.addService(userService.service, UserHandlers);
  server.addService(authService.service, AuthHandlers);
  server.bindAsync(
    `0.0.0.0:${port}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
      console.log(`Server listening on ${port}`);
      server.start();
    }
  );
}

main();

import grpc from "@grpc/grpc-js";
import fs from "fs";
import path from "path";
import { FileStreamRequestMessage } from "../../proto/generated/FileStreamRequestMessage";
import { FileStreamResponseMessage } from "../../proto/generated/FileStreamResponseMessage";
export class FileStream {
  public async streamFile(
    call: grpc.ServerDuplexStream<
      FileStreamRequestMessage,
      FileStreamResponseMessage
    >
  ) {
    let videoStream = fs.createReadStream(path.resolve(__dirname, "../1.pdf"));
    let { size } = fs.statSync(path.resolve(__dirname, "../1.pdf"));
    let answer = call.metadata.get("answer")[0] as string;

    let a = 0;
    console.log(answer);
    videoStream.on("data", (chunk) => {
      call.write({ data: chunk, id: "1" });
    });
    videoStream.on("end", () => {
      console.log("end");
    });
  }
}

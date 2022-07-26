import grpc from "@grpc/grpc-js";
import { ChatRequestMessage } from "../../proto/generated/ChatRequestMessage";
import { ChatResponseMessage } from "../../proto/generated/ChatResponseMessage";
const obj = new Map<
  string,
  grpc.ServerDuplexStream<ChatRequestMessage, ChatResponseMessage>
>();
export class Chat {
  public async startChat(
    call: grpc.ServerDuplexStream<ChatRequestMessage, ChatResponseMessage>
  ) {
    const name = call.metadata.get("name")[0] as string;

    call.on("data", (data) => {
      for (let [user, users] of obj) {
        console.log(user);
        if (name !== user) {
          users.write({
            msg: data.msg,
            name: name,
          });
        }
      }
    });
    if (obj.get(name) === undefined) {
      obj.set(name, call);
    }
    call.on("end", () => {
      console.log("end");
    });
  }
}

import { CommandNotFound, Discord, CommandMessage, On, ArgsOf, Client } from "@typeit/discord";
import { OnMemberJoin } from "../commands/Bye";

@Discord("!", {
  import: [
    OnMemberJoin
  ]
})
export class DiscordApp {
  @On("message")
  onMessage(
    [message]: ArgsOf<"message">,
    client: Client
  ) {

  }

  @CommandNotFound()
  notFoundA(command: CommandMessage) {
    command.reply("Command not found");
  }
}
import { CommandNotFound, Discord, CommandMessage, On, ArgsOf, Client } from "@typeit/discord";
import { Bye } from "../commands/Bye";

@Discord("!", {
  import: [
    Bye
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
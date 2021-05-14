
import { Command, CommandMessage } from "@typeit/discord";

export abstract class Hello {
  @Command("hello")
  async hello(command: CommandMessage) {
    command.reply("Hello!");
  }
}
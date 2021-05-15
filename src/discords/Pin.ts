import {
  CommandNotFound,
  Discord,
  CommandMessage,
  Client,
  Command,
  Description,
  Infos,
} from "@typeit/discord";
import { Admin } from "../commands/Admin";

@Discord("sy ", { import: [Admin] })
@Description("Admin Commands")
export class DiscordApp {
  @CommandNotFound()
  notFoundA(command: CommandMessage) {
    command.reply("Might wanna learn english, thats not how i work!");
  }
}


import { Command, CommandMessage, Description} from "@typeit/discord";

export abstract class Bye {
  @Command("bye")
  async bye(command: CommandMessage) {
    command.reply("Bye!");
  }
}
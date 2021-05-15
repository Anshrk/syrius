import { Client, Command, CommandMessage, Description } from "@typeit/discord";
import { MessageEmbed } from "discord.js";
import { GetIDByMention } from "../utils/User";

interface KickArgs {
  user: string;
  reason?: string;
}

export abstract class Admin {
  @Command("kick :user :reason")
  @Description("Kick a user")
  async hello(command: CommandMessage<KickArgs>, client: Client) {
    const id = GetIDByMention(command);

    const Myembed = new MessageEmbed()
      .setColor("#000")
      .setTitle(`${command.args.reason} Was Kicked`)
      .addFields(
        { name: "By", value: command.author },
        { name: "Kicked", value: command.args.user },
        {
          name: "Reason",
          value: command.args.reason ? command.args.reason : "Not specified",
        }
      );

    console.log(command.guild?.member(id)?.nickname)
    command.guild
      ?.member(command.guild.member(id)!)
      ?.kick(command.args.reason)
      .then(() => command.channel.send(Myembed))
      .catch((err) => {
        command.reply(`couldn't kick the dude because \`\`\`${err}\`\`\``);
        console.log(err);
      });
  }
}

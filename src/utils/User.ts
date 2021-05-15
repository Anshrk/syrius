import { CommandMessage } from "@typeit/discord";

export const GetIDByMention = (command: CommandMessage) => {
  const matches = command.args.user.match(/^<@!?(\d+)>$/);
  console.log(matches[1], "was kicked");
  return matches[1];
};

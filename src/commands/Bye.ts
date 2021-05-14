
import { On, ArgsOf } from "@typeit/discord";

export abstract class OnMemberJoin {
    @On('guildMemberAdd')
    async AddRole([person]: ArgsOf<"guildMemberAdd">) {
        
    }
}
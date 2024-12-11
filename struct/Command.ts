import { CommandInteraction } from "discord.js";
import { Bot } from "./Bot";

export interface Command {
    name: string;
    description: string;
    execute: (bot: Bot, interaction: CommandInteraction) => Promise<any>;
    data: any;
}

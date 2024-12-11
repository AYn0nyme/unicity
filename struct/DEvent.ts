import { type ClientEvents } from "discord.js";
import { Bot } from "./Bot";

export interface DEvent {
    name: keyof ClientEvents;
    once?: boolean;
    execute: (bot: Bot, ...args: any[]) => Promise<any>;
}

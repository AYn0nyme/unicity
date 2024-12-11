import { OAuth2Scopes } from "discord.js";
import { DEvent } from "../struct/DEvent";

module.exports = {
    name: "ready",
    once: true,
    async execute(bot) {
        console.log(bot.generateInvite({ scopes: [OAuth2Scopes.Bot, OAuth2Scopes.ApplicationsCommands], permissions: ["Administrator"] }))
    }
} satisfies DEvent

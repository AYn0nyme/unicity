import { SlashCommandBuilder } from "discord.js";
import { Command } from "../struct/Command";

module.exports = {
    name: "ping",
    description: "Ping!:",
    async execute(bot, interaction) {
        interaction.reply(`${bot.ws.ping}ms`);
    },
    get data() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(this.description)
    }
} satisfies Command

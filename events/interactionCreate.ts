import { DEvent } from "../struct/DEvent";
import { Interaction } from 'discord.js'

module.exports = {
    name: "interactionCreate",
    async execute(bot, interaction: Interaction) {
        if (interaction.isCommand()) {
            const command = bot.commands.get(interaction.commandName);
            if (!command) return interaction.reply({
                ephemeral: true,
                content: ":x: No."
            });
            return command.execute(bot, interaction);
        }
    }
} satisfies DEvent

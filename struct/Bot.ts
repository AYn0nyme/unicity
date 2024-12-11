import { Client, Collection, REST, Routes } from "discord.js";
import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import { Command } from "./Command";
import { DEvent } from "./DEvent";
import { Database } from "./Database";

export class Bot extends Client {
    commands: Collection<string, Command>;
    db: Database
    constructor() {
        super({
            intents: ["DirectMessages", "GuildEmojisAndStickers", "GuildMembers", "GuildMessageReactions", "GuildMessages", "GuildPresences", "Guilds", "MessageContent"]
        });
        this.commands = new Collection();
        this.db = new Database();
    }

    async init() {
        const commands = [];
        for (const file of readdirSync(join(process.cwd(), "commands")).filter(f => f.endsWith(".js"))) {
            const command: Command = require(`${join(process.cwd(), "commands")}/${file}`);
            commands.push(command.data)
            this.commands.set(command.name, command);
        }
        for (const file of readdirSync(join(process.cwd(), "events")).filter(f => f.endsWith(".js"))) {
            const event: DEvent = require(`${join(process.cwd(), "events")}/${file}`);
            if (event.once) this.once(event.name, (...args) => event.execute(this, ...args));
            else this.once(event.name, (...args) => event.execute(this, ...args));
        }

        const rest = new REST().setToken(process.env.DISCORD_TOKEN);

        rest.put(Routes.applicationCommands("1011368761359601704"), { body: commands });

        this.login(process.env.DISCORD_TOKEN);
    }
}

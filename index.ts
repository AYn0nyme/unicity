import { config } from "dotenv";
import { Bot } from "./struct/Bot";
config()
const bot = new Bot();
bot.init();

process.on("uncaughtException", (err) => {
    console.error(err)
})

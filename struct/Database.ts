import { Client } from "pg";

export class Database {
    client: Client;
    constructor() {
        this.client = new Client({
            host: process.env.VPS_IP,
            database: "unicity",
            user: "aynonyme",
            password: process.env.DATABASE_PASSWORD
        });
        this.client.connect().then(() => console.log("hi!")).catch(err => console.error(err))
    }
}

// env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
        DATABASE_PASSWORD: string;
        VPS_IP: string;
        DISCORD_TOKEN: string;
    }
}

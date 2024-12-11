const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    user: 'aynonyme',
    host: process.env.VPS_IP,
    database: 'unicity',
    password: process.env.DATABASE_PASSWORD,
    port: 5432,
});

client.connect()
    .then(() => {
        console.log('Connected to PostgreSQL');
        return client.query('SELECT NOW()');
    })
    .then((res) => {
        console.log('Current Time:', res.rows[0]);
        client.end();
    })
    .catch((err) => {
        console.error('Error connecting to PostgreSQL:', err);
    });

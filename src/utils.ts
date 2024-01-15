import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://qahwmoyl:voPXc6I9Gtqpl4oZYpZOttIkjql2vG95@tyke.db.elephantsql.com/qahwmoyl");
    await client.connect();
    return client;
}
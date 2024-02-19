import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const migrationClient = postgres(process.env.DB_URL || "", { max: 1 })
const db = drizzle(migrationClient);

const runDbScripts = async () => {
    await migrate(db, {
        migrationsFolder: "./src/db/scripts"
    });
    await migrationClient.end();
}

runDbScripts();
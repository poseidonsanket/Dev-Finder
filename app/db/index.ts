import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as schema from "./schema";

// for migrations
// const migrationClient = postgres(process.env.DATABASE_URL!, { max: 1 });
// migrate(drizzle(migrationClient), ...)

// for query purposes
const queryClient = postgres(process.env.DATABASE_URL!);
const db = drizzle(queryClient, { schema });
// await db.select().from(...)...

export { db };

//postgresql://neondb_owner:9yoc8ZYRndaJ@ep-mute-union-a1lvrdea.ap-southeast-1.aws.neon.tech/devfinder?sslmode=require

import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";


export const testing = pgTable("testing", {
  id: serial("id").notNull().primaryKey(),
  name: text("name"),
});

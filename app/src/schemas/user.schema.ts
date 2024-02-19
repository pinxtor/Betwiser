import { pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: varchar('id', { length: 7 }).primaryKey(),
    firstName: text('first_name').notNull(),
    lastName: text('last_name').notNull(),
    email: text("email").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

import { db } from "../db/config";
import { users } from "../schemas/user.schema";
import { eq } from "drizzle-orm";

export async function findUserById(id: string) {
    return db.select().from(users).where(eq(users.id, id));
}
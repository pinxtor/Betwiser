import { t } from "elysia";

export const userSchema = t.Object({
    firstname: t.String(),
    lastname: t.String(),
    email: t.String()
});
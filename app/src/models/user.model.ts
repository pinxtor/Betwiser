import { t } from "elysia";

const userSchema = t.Object({
    id: t.String(),
    firstname: t.String(),
    lastname: t.String(),
});

export default userSchema
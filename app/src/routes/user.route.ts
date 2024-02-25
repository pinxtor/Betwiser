import { Elysia, t } from "elysia"
import { fetchUserProfile, signIn } from "../controllers/user.controller";

const userRoutes = new Elysia({ prefix: '/user' });

userRoutes.post('/sign-in', signIn);

userRoutes.get('/:id', fetchUserProfile, {
    params: t.Object({
        id: t.String()
    })
});

export default userRoutes;
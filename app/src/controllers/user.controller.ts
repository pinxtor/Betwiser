import { fetchUser } from "../repositories/user.repo"

export async function signIn(ctx: any) {
    console.log(ctx)
}

export async function getUser(ctx: any) {
    return fetchUser(ctx.params.id);
}
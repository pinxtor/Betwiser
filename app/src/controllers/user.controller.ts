import { fetchUser } from "../services/user.service";

export async function signIn(ctx: any) {
    console.log(ctx)
}

export function fetchUserProfile(ctx: any) {
    return fetchUser(ctx.params.id);
}

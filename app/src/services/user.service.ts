import { findUserById } from "../repositories/user.repo";

export async function fetchUser(id: string) {
    let user = await findUserById(id);
    return user;
}
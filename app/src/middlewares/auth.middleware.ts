import { Elysia, t } from "elysia";

export function authenticate(request: any, headers: any) {
    let authHeader = headers?.authorization;
}
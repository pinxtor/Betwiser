import { Elysia, t } from "elysia";

export function trace(request: any, response: any) {
    console.log(response);
}
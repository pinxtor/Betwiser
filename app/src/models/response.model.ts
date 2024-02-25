import { errorsType } from "./error.model"

export type errorResponse = {
    errors: errorsType
}

export type dataResponse = {
    data: any
}

export function generateErrorResponse(errors: errorsType): errorResponse {
    let errorResponse: errorResponse = {
        errors: errors
    };
    return errorResponse;
}

export function generateDataResponse(data: any): dataResponse {
    let dataResponse: dataResponse = {
        data: data
    };
    return dataResponse;
}
export type errorType = {
    code?: number,
    field?: string,
    message: string,
}

export type errorsType = errorType[];

export function generateErrorObject(message: string, code?: number, field?: string): errorType {
    let error: errorType = {
        message: message,
    };
    if (code) error.code = code;
    if (field) error.field = field;
    return error;
}
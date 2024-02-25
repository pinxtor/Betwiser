import { Elysia } from "elysia";
import userRoutes from "./routes/user.route";
import { authenticate } from "./middlewares/auth.middleware";
import { trace } from "./middlewares/analytics.middleware";
import { generateErrorObject, errorsType } from "./models/error.model";
import { generateDataResponse, generateErrorResponse } from "./models/response.model";
import { ErrorCode } from "./enums/error.code";
import { ErrorMessage } from "./enums/error.message";

const app = new Elysia();

app.onBeforeHandle(({ request, headers }) => authenticate(request, headers));
app.onAfterHandle(({ request, response }) => trace(request, response));
app.onAfterHandle(({ response }) => { return generateDataResponse(response) });

app.onError(({ code, error, set }) => {
  console.log(error);
  let errors: errorsType = [];
  switch (code) {
    case 'NOT_FOUND':
      set.status = ErrorCode.NOT_FOUND;
      errors.push(generateErrorObject(ErrorMessage.NOT_FOUND));
      break;
    case 'VALIDATION':
      set.status = ErrorCode.VALIDATION;
      errors.push(generateErrorObject(ErrorMessage.REQUEST_INVALID));
      break;
    default:
      set.status = 500;
      errors.push(generateErrorObject(ErrorMessage.INTERVAL_SERVER_ERROR));
      break;
  }

  return generateErrorResponse(errors);
});

app.use(userRoutes);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

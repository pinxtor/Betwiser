import { Elysia, t } from "elysia";
import userRoutes from "./routes/user.route";
import { authenticate } from "./middlewares/auth.middleware";

const app = new Elysia();
app.onBeforeHandle(({ headers }) => authenticate(headers));
app.use(userRoutes);
app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

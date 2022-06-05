import express from "express";
import sessionRouter from "./routers/session.routes";
import userRouter from "./routers/user.routes";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", sessionRouter);

app.listen(3000);

export default app;

import express from "express";
import usersRoutes from "./routes/users.routes";
import sessionRouter from "./routes/session.routes";

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", sessionRouter);

app.listen(3000);

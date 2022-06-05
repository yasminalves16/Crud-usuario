import express from "express";
import appRouter from "./routes/app.routes";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/", appRouter);

app.listen(port, console.log(`App rodando`));

export default app;

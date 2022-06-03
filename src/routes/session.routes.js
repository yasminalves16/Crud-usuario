import { Router } from "express";

import loginUser from "../controllers/loginUser.controller";

import loginSchema from "../database/schemas/login.schema";
import schemaValidation from "../middlewares/schemaValidation.middleware";

const sessionRouter = Router();

sessionRouter.post("", schemaValidation(loginSchema), loginUser);

export default sessionRouter;

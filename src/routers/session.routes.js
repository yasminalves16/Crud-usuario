import { Router } from "express";
import userLoginController from "../controllers/sessions/userLogin.controller";
import schemaValidation from "../middlewares/schemaValiation.middleware";
import loginSchema from "../schemas/login.schema";

const sessionRouter = Router();

sessionRouter.post("", schemaValidation(loginSchema), userLoginController);

export default sessionRouter;

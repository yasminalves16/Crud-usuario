import { Router } from "express";

import userSchema from "../database/schemas/user.schema";
import schemaValidation from "../middlewares/schemaValidation.middleware";

import createUserController from "../controllers/createUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import authorization from "../middlewares/auth.middlewares";

const router = Router();

router.post("", schemaValidation(userSchema), createUserController);
router.get("", authorization, listUsersController);
router.get("/profile"); // passar o token
router.patch("/:id"); //atualizar os dados
router.delete("/:id"); // deleta usuario

export default router;

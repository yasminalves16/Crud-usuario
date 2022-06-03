import { Router } from "express";

import userSchema from "../database/schemas/user.schema";
import schemaValidation from "../middlewares/schemaValidation.middleware";

import createUserController from "../controllers/createUser.controller";
import listUsersController from "../controllers/listUsers.controller";

const router = Router();

router.post("/users", schemaValidation(userSchema), createUserController);
router.post("/login"); // logar com user
router.get("/users", listUsersController);
router.get("/users/profile"); // passar o token
router.patch("/users/:id"); //atualizar os dados
router.delete("/users/:id"); // deleta usuario

export default router;

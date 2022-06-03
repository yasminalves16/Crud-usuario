import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import listUsersController from "../controllers/listUsers.controller";
//import updateUserController from "../controllers/updateUser.controller";
import getUserProfileController from "../controllers/getUserProfile.controller";
import deleteUserController from "../controllers/deleteUser.controller";

import userSchema from "../database/schemas/user.schema";

import schemaValidation from "../middlewares/schemaValidation.middleware";
import authorization from "../middlewares/auth.middlewares";
import verifyAdm from "../middlewares/verifyAdm.middlewares";
import verifyUser from "../middlewares/verifyExistingUser.middleware";

const router = Router();

router.post("", schemaValidation(userSchema), createUserController);
router.get("", authorization, verifyAdm, listUsersController);
router.get("/profile", authorization, getUserProfileController);
//router.patch("/:id", authorization, verifyUser, updateUserController);
router.delete("/:id", authorization, verifyUser, deleteUserController);

export default router;

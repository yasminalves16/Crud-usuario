import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateUser.controller";
import loginUserController from "../controllers/listUsers.controller";
import getUserProfileController from "../controllers/getUserProfile.controller";

import verifyAdm from "../middlewares/verifyAdm.middlewares";
import verifyEmail from "../middlewares/verifyEmail.middleware";
import verifyToken from "../middlewares/verifyToken.middlewares";
import verifyUpdate from "../middlewares/verifyUpdate.middleware";

const router = Router();

router.post("/users", verifyEmail, createUserController);
router.get("/users", verifyAdm, listUsersController);
router.patch("/users/:id", verifyUpdate, updateUserController);
router.delete("/users/:id", verifyUpdate, deleteUserController);
router.post("/login", loginUserController);
router.get("/users/profile", verifyToken, getUserProfileController);

export default router;

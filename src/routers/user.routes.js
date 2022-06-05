import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import userProfileController from "../controllers/users/userProfile.controller";
import usersListController from "../controllers/users/usersList.controller";
import userSchema from "../schemas/user.schema";
import schemaValidation from "../middlewares/schemaValiation.middleware";
import userIsAdmMiddleware from "../middlewares/userIsAdm.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import updateUserDataController from "../controllers/users/updateUserData.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import userUpdateSchema from "../schemas/userUpdate.schema";

const userRouter = Router();

// userRouter.post("/", createUserController);
userRouter.post("/", schemaValidation(userSchema), createUserController);
userRouter.get(
  "",
  verifyAuthTokenMiddleware,
  userIsAdmMiddleware,
  usersListController
);
userRouter.get("/profile", verifyAuthTokenMiddleware, userProfileController);
userRouter.patch(
  "/:uuid",
  schemaValidation(userUpdateSchema),
  verifyAuthTokenMiddleware,
  updateUserDataController
);
userRouter.delete("/:uuid", verifyAuthTokenMiddleware, deleteUserController);

export default userRouter;

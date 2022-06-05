import users from "../../database";
import * as bcrypt from "bcryptjs";

const updateUserDataService = async (data, uuid, userId, userIsAdm) => {
  if (userId !== uuid && !userIsAdm) {
    throw new Error("Missing admin permissions");
  }

  const user = users.find((element) => element.uuid === uuid);

  const userIndex = users.findIndex((element) => element.uuid === uuid);

  const updateDate = new Date();

  const updatedUser = {
    ...user,
    ...data,
    uuid: user.uuid,
    updatedOn: updateDate.toISOString(),
    createdOn: user.createdOn,
    isAdm: user.isAdm,
  };

  if (data.password) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    updatedUser.password = hashedPassword;
  }

  users[userIndex] = updatedUser;

  const userToResponse = { ...updatedUser };
  delete userToResponse.password;

  return userToResponse;
};

export default updateUserDataService;

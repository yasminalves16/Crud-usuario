import users from "../../database";

const deleteUserService = (uuid, userId, userIsAdm) => {
  if (!userIsAdm && userId !== uuid) {
    throw new Error("Missing admin permissions");
  }

  const userIndex = users.findIndex((element) => element.uuid === uuid);

  if (userIndex === -1) {
    throw new Error("User not found");
  }

  users.splice(userIndex, 1);

  return {
    message: "User deleted with success",
  };
};

export default deleteUserService;

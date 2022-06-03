import users from "../database";

const deleteUserService = (uuid) => {
  const userIndex = users.findIndex((user) => user.uuid === uuid);

  if (userIndex === -1) {
    throw new Error("User not found");
  }

  users.splice(userIndex, 1);

  return "User deleted with success";
};

export default deleteUserService;

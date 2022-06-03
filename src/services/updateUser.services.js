import users from "../database";

const updateUserServices = (id, name, email) => {
  const updateUser = {
    id,
    name,
    email,
    updatedOn: new Date(),
  };

  const userIndex = users.findIndex((element) => element.id === id);

  if (userIndex === -1) {
    return "User not found";
  }

  users[userIndex] = { ...users[userIndex], ...updateUser };

  const user = {
    name,
    email,
    isAdm: users[userIndex].isAdm,
    createdOn: users[userIndex].createdOn,
    updatedOn: users[userIndex].updatedOn,
    id: users[userIndex].id,
  };

  return user;
};

export default updateUserServices;

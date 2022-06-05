import users from "../../database";

const userProfileService = (id) => {
  const user = users.find((element) => element.uuid === id);

  const { uuid, createdOn, updatedOn, name, email, isAdm } = user;
  const userWithoutPassword = {
    uuid,
    createdOn,
    updatedOn,
    name,
    email,
    isAdm,
  };

  // return user;
  return userWithoutPassword;
};

export default userProfileService;

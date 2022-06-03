import users from "../database";

const listProfileServices = (email) => {
  const profileUser = users.find((user) => user.email == email);

  const user = {
    name: profileUser.name,
    email: profileUser.email,
    isAdm: profileUser.isAdm,
    createdOn: profileUser.createdOn,
    updatedOn: profileUser.updatedOn,
    id: profileUser.id,
  };

  return user;
};

export default listProfileServices;

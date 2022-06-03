import listUsersService from "../services/listUsers.services";

const listUsersController = (req, res) => {
  const usersList = listUsersService();

  return res.json(usersList);
};

export default listUsersController;

import listUsersService from "../services/listUsers.services";

const listUsersController = (req, res) => {
  const usersList = listUsersService();

  return res.status(200).json(usersList);
};

export default listUsersController;

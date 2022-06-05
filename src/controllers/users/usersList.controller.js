import usersListService from "../../services/users/usersList.service";

const usersListController = (req, res) => {
  const users = usersListService();
  return res.status(200).json(users);
};

export default usersListController;

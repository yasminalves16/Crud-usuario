import deleteUserService from "../services/deleteUser.services";

const deleteUserController = (req, res) => {
  const { id } = req.params;

  const deletedUser = deleteUserService(id);

  return res.status(200).json({ message: deletedUser });
};

export default deleteUserController;

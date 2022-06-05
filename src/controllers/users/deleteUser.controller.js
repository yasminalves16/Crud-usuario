import deleteUserService from "../../services/users/deleteUser.service";

const deleteUserController = (req, res) => {
  try {
    const { uuid } = req.params;
    const userId = req.user.id;
    const userIsAdm = req.user.isAdm;
    const deleteUser = deleteUserService(uuid, userId, userIsAdm);
    return res.status(200).json(deleteUser);
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};

export default deleteUserController;

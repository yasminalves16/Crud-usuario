import updateUserService from "../services/updateUser.service";

const updateUserController = (req, res) => {
  const { id } = req.params;
  const newUser = req.body;

  try {
    const updatedUser = updateUserService(newUser, id);

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

export default updateUserController;

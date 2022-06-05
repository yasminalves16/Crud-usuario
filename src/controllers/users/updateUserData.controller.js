import updateUserDataService from "../../services/users/updateUserData.service";

const updateUserDataController = async (req, res) => {
  try {
    const { uuid } = req.params;
    const data = req.body;
    const userId = req.user.id;
    const userIsAdm = req.user.isAdm;
    const updatedUser = await updateUserDataService(
      data,
      uuid,
      userId,
      userIsAdm
    );
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};

export default updateUserDataController;

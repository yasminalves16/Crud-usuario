import userProfileService from "../../services/users/userProfile.service";

const userProfileController = (req, res) => {
  const { id } = req.user;
  const userData = userProfileService(id);
  return res.status(200).json(userData);
};

export default userProfileController;

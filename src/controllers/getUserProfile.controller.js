import getUserProfileService from "../services/getUserProfile.services";

const getUserProfileController = (req, res) => {
  const user = req.user;

  const userData = getUserProfileService(user.id);

  return res.status(200).json(userData);
};

export default getUserProfileController;

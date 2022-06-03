import getUserProfileService from "../services/getUserProfile.services";

const getUserProfileController = (req, res) => {
  let token = req.headers.authorization;

  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decode) => {
    const { email } = decode;
    const userProfile = getUserProfileService(email);
    return res.json(userProfile);
  });
};

export default getUserProfileController;

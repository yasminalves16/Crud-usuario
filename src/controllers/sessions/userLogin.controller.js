import userLoginService from "../../services/sessions/userLogin.service";

const userLoginController = (req, res) => {
  try {
    const data = req.body;
    const token = userLoginService(data);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};

export default userLoginController;

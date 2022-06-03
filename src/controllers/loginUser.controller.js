import loginUserService from "../services/loginUser.services";

const loginUser = async (req, res) => {
  try {
    const token = await loginUserService(req.body);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default loginUser;

import loginUserService from "../services/loginUser.services";

const loginUserController = (req, res) => {
  const { email, password } = req.body;

  const userLogin = loginUserService(email, password, res);

  return res.json(userLogin);
};

export default loginUserController;

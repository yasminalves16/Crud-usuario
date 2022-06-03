import createUserService from "../services/createUser.services";

const createUserController = async (req, res) => {
  const { email, name, password, isAdm } = req.body;

  const user = await createUserService(email, name, password, isAdm);

  return res.json(user);
};

export default createUserController;

import createUserService from "../services/createUser.services";

const createUserController = (req, res) => {
  try {
    const user = createUserService(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export default createUserController;

import users from "../database";

const verifyExistingUser = (req, res, next) => {
  const userId = req.params.id;

  const userExists = users.find((user) => user.id === userId);

  if (!userExists) {
    return res.status(404).json({
      message: "Usuario não encontrado",
    });
  }

  next();
};

export default verifyExistingUser;

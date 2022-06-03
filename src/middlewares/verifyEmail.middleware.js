import users from "../database";

const verifyEmail = (req, res, next) => {
  const { email, isAdm } = req.body;

  const userAlreadyExists = users.find((user) => user.email === email);

  if (isAdm !== true) {
    if (isAdm !== false) {
      return res.status(400).json({ message: "This isAdm is not a boolean" });
    }
  }

  if (userAlreadyExists) {
    return res.status(400).json({ message: "E-mail already registered" });
  }
  next();
};

export default verifyEmail;

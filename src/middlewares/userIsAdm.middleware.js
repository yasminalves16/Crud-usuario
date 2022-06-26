import users from "../database";

const userIsAdmMiddleware = (req, res, next) => {
  const email = req.user.email;

  const user = users.find((element) => element.email === email);

  if (!user.isAdm) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  next();
};

export default userIsAdmMiddleware;

import users from "../database";

const userIsAdmMiddleware = (req, res, next) => {
  const user = users.find((element) => element.email === req.user.email);

  if (!user.isAdm) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  next();
};

export default userIsAdmMiddleware;

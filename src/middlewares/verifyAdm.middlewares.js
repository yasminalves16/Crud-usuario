import jwt from "jsonwebtoken";
import users from "../database";

const verifyAdm = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid Token" });
    } else {
      const { email } = decoded;
      const actualUser = users.find((user) => user.email === email);
      if (actualUser.isAdm === false)
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
  });
};

export default verifyAdm;

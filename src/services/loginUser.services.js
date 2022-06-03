import users from "../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const loginUserServices = (email, password, res) => {
  const user = users.find((element) => element.email === email);

  if (!user) {
    return res.status(401).json({ message: "Wrong email/password" });
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ message: "Wrong email/password" });
  }

  const token = jwt.sign({ email: email }, "SECRET_KEY", { expiresIn: "24h" });

  return res.status(200).json({ token });
};

export default loginUserServices;

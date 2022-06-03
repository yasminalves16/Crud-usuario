import users from "../database/index";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const loginUserService = async ({ email, password }) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    throw new Error("Wrong email/password");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Wrong email/password");
  }

  const token = jwt.sign(
    {
      adm: user.adm,
    },
    "e89f5c212146679abbfce5ceba3e975e",
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );

  return token;
};

export default loginUserService;

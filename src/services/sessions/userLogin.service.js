import users from "../../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const userLoginService = (data) => {
  const user = users.find((element) => element.email === data.email);

  if (!user) {
    throw new Error("Wrong email/password");
  }

  const passwordMatch = bcrypt.compareSync(data.password, user.password);

  if (!passwordMatch) {
    throw new Error("Wrong email/password");
  }

  const token = jwt.sign(
    { email: data.email, isAdm: user.isAdm },
    "sdfDFG!@#%ASDFAS",
    {
      expiresIn: "24h",
      subject: user.uuid,
    }
  );

  return token;
};

export default userLoginService;

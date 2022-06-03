import users from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async ({ email, name, password, adm }) => {
  const userAlreadyExists = users.find((user) => user.email === email);

  if (userAlreadyExists) {
    throw new Error("E-mail already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 8);

  const newUser = {
    id: uuidv4(),
    name,
    email,
    password: hashedPassword,
    adm,
  };

  users.push(newUser);

  return newUser;
};

export default createUserService;

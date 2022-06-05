import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";
import users from "../../database";

const createUserService = async (data) => {
  const emailAlreadyExist = users.find((user) => user.email === data.email);

  if (emailAlreadyExist) {
    throw new Error("E-mail already registered");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const creationDate = new Date();

  const newUser = {
    uuid: uuidv4(),
    createdOn: creationDate.toISOString(),
    updatedOn: creationDate.toISOString(),
    ...data,
    password: hashedPassword,
  };

  users.push(newUser);

  const userToResponse = { ...newUser };
  delete userToResponse.password;

  return userToResponse;
};

export default createUserService;

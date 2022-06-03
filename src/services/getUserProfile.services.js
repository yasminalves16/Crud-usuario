import users from "../database";
import jwt_decode from "jwt-decode";

const profileUserService = (token) => {
  const decoded = jwt_decode(token);

  const user = users.find((elem) => elem.email === decoded.email);

  const userToDisplay = { ...user };

  delete userToDisplay["password"];

  return userToDisplay;
};

export default profileUserService;

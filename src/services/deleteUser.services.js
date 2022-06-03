import users from "../database";

const deleteUserServices = (email, res) => {
  const userIndex = users.findIndex((element) => element.email === email);

  if (userIndex === -1) {
    return res.status(401).json({ message: "User not found" });
  }

  users.splice(userIndex, 1);

  return res.status(200).json({ message: "User deleted with success" });
};

export default deleteUserServices;

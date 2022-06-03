import jwt_decode from "jwt-decode";

const verifyUser = (req, res, next) => {
  const token = req.token;
  const { id } = req.params;

  const decoded = jwt_decode(token);

  if (!decoded.adm && id !== decoded.id) {
    return res.status(401).json({ message: "Missing admin permissions" });
  }

  next();
};

export default verifyUser;

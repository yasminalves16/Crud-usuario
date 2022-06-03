import jwt_decode from "jwt-decode";

const verifyAdm = (req, res, next) => {
  const token = req.token;

  const decoded = jwt_decode(token);

  if (!decoded.adm) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};

export default verifyAdm;

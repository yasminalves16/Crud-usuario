import jwt from "jsonwebtoken";

const authorization = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Missing authorization headers",
    });
  }

  token = token.split(" ")[1];

  jwt.verify(token, "e89f5c212146679abbfce5ceba3e975e", (error, decoded) => {
    if (error) {
      return res.status(401).json({
        message: "Missing authorization headers",
      });
    }

    req.user = {
      id: decoded.sub,
      adm: decoded.adm,
    };

    next();
  });
};

export default authorization;

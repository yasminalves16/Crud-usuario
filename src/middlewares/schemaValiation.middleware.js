const schemaValidation = (schema) => async (req, res, next) => {
  try {
    const validated = await schema.validate(req.body);
    req.body = validated;
    next();
  } catch (error) {
    return res.status(400).json({
      message: error.errors.join(", "),
    });
  }
};

export default schemaValidation;

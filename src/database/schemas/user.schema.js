import * as yup from "yup";

const userSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
});

export default userSchema;

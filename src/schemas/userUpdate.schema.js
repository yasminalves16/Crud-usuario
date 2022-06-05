import * as yup from "yup";

const userUpdateSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  password: yup.string(),
});

export default userUpdateSchema;

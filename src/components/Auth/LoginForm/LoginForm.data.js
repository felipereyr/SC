import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    password: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email("Invalid email").required("Email is mandatory"),
    password: Yup.string().required("The password is mandatory"),
  });
}

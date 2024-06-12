import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    password: "",
    repe: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email("Invalid email").required("Email is mandatory"),
    password: Yup.string().required("The password is mandatory"),
    repeatPassword: Yup.string()
      .required("The password is mandatory")
      .oneOf([Yup.ref("password")], "Passwords must be the same"),
  });
}

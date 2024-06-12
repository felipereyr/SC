import * as Yup from "yup";

export function initialValues() {
  return {
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  };
}

export function validationSchema() {
  return Yup.object({
    password: Yup.string().required("This field is required"),
    newPassword: Yup.string().required("This field is required"),
    confirmNewPassword: Yup.string()
      .required("This field is required")
      .oneOf([Yup.ref("newPassword")], "New passwords must be the same"),
  });
}

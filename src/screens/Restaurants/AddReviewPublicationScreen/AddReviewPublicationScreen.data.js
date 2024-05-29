import * as Yup from "yup";

export function initialValues() {
  return {
    title: "",
    comment: "",
    rating: 3,
  };
}

export function validationSchema() {
  return Yup.object({
    title: Yup.string().required("The title is required"),
    comment: Yup.string().required("The cooment is required"),
    rating: Yup.number().required("Is required"),
  });
}

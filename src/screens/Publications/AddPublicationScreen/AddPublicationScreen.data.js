import * as Yup from "yup";
import { getAuth } from "firebase/auth";

const auth = getAuth();

export function initialValues() {
  return {
    name: "",
    shop: "",
    description: "",
    images: [],
  };
}

export function validationSchema() {
  return Yup.object({
    name: Yup.string().required("Campo obligatorio"),
    shop: Yup.string().url().required("Campo obligatorio"),
    description: Yup.string().required("Campo obligatorio"),
    images: Yup.array()
      .min(1, "Se requiere imagen")
      .max(3, "No se permiten más de 3 imágenes")
      .required("Una imagen porfa"),
  });
}

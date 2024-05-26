import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { useFormik } from "formik";
import { styles } from "./AddPublicationScreen.styles";
import { InfoForm } from "../../../components/Restaurants/AddPublication/InfoForm";
import { validationSchema, initialValues } from "./AddPublicationScreen.data";
import { UploadImagesForm } from "../../../components/Restaurants/AddPublication/UploadImagesForm";

export function AddPublicationScreen() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue);
    },
  });
  return (
    <View>
      <InfoForm formik={formik} />
      <UploadImagesForm formik={formik} />
      <Button
        title="Crear publicación"
        loading={formik.isSubmitting}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
      />
    </View>
  );
}

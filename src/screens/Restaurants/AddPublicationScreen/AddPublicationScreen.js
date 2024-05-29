import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { useFormik } from "formik";
import { styles } from "./AddPublicationScreen.styles";
import { InfoForm } from "../../../components/Restaurants/AddPublication/InfoForm";
import { validationSchema, initialValues } from "./AddPublicationScreen.data";
import { UploadImagesForm } from "../../../components/Restaurants/AddPublication/UploadImagesForm";
import { ImageRestaurant } from "../../../components/Restaurants/AddPublication/ImageRestaurant";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../../utils/firebase";
import { useNavigation } from "@react-navigation/native";

export function AddPublicationScreen() {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const newData = formValue;
        newData.id = uuidv4();
        newData.createdAt = new Date();

        await setDoc(doc(db, "publications", newData.id), newData);

        navigation.goBack();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageRestaurant formik={formik} />
      <InfoForm formik={formik} />
      <UploadImagesForm formik={formik} />
      <Button
        title="Crear publicación"
        loading={formik.isSubmitting}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
      />
    </ScrollView>
  );
}

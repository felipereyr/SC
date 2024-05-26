import { View } from "react-native";
import React from "react";
import { styles } from "./InfoForm.styles";
import { Input } from "react-native-elements";

export function InfoForm(props) {
  const { formik } = props;
  return (
    <View style={styles.content}>
      <Input
        placeholder="Nombre restaurante"
        onChangeText={(text) => formik.setFieldValue("name", text)}
        errorMessage={formik.errors.name}
      />
      <Input
        placeholder="Dirección"
        onChangeText={(text) => formik.setFieldValue("address", text)}
        errorMessage={formik.errors.address}
      />
      <Input
        placeholder="Teléfono"
        onChangeText={(text) => formik.setFieldValue("phone", text)}
        errorMessage={formik.errors.phone}
      />
      <Input
        placeholder="Email"
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Descripción"
        multiline={true}
        inputContainerStyle={styles.textArea}
        onChangeText={(text) => formik.setFieldValue("description", text)}
        errorMessage={formik.errors.description}
      />
    </View>
  );
}

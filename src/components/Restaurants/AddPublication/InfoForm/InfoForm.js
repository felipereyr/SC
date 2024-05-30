import { View } from "react-native";
import React from "react";
import { styles } from "./InfoForm.styles";
import { Input } from "react-native-elements";

export function InfoForm(props) {
  const { formik } = props;
  return (
    <View style={styles.content}>
      <Input
        placeholder="Name of Garment"
        onChangeText={(text) => formik.setFieldValue("name", text)}
        errorMessage={formik.errors.name}
      />
      <Input
        placeholder="Link to shop"
        onChangeText={(text) => formik.setFieldValue("shop", text)}
        errorMessage={formik.errors.shop}
      />
      <Input
        placeholder="Description"
        multiline={true}
        inputContainerStyle={styles.textArea}
        onChangeText={(text) => formik.setFieldValue("description", text)}
        errorMessage={formik.errors.description}
      />
    </View>
  );
}

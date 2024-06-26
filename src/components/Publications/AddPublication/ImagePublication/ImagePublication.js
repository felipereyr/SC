import { View, Text } from "react-native";
import React from "react";
import { styles } from "./ImagePublication.styles";
import { Image } from "react-native-elements";

export function ImagePublication(props) {
  const { formik } = props;

  const primaryImage = formik.values.images[0];

  return (
    <View style={styles.content}>
      <Image
        source={
          primaryImage
            ? { uri: primaryImage }
            : require("../../../../../assets/img/image-not-found.jpg")
        }
        style={styles.image}
      />
    </View>
  );
}

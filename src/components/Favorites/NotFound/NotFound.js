import { View } from "react-native";
import React from "react";
import { Text, Icon } from "react-native-elements";
import { styles } from "./NotFound.styles";

export function NotFound() {
  return (
    <View style={styles.content}>
      <Icon type="material-community" name="emoticon-sad-outline" size={80} />
      <Text style={styles.text}>You have no clothes saved</Text>
    </View>
  );
}

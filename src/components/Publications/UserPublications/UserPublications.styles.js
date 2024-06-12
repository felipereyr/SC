import { StyleSheet, Dimensions } from "react-native";

const widthScreen = Dimensions.get("window").width;

const width = widthScreen / 3;

export const styles = StyleSheet.create({
  container: {},
  image: {
    width: width,
    height: 125,
  },
  list: {
    display: "grid",
    flexDirection: "row",
  },
});

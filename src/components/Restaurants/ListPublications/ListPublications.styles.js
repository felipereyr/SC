import { StyleSheet, Dimensions } from "react-native";

const widthScreen = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  user: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginBottom: 10,
  },
  publication: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: widthScreen,
  },
  image: {
    width: widthScreen,
    height: 350,
    borderWidth: 5,
    borderColor: "#D6445B",
  },
  name: {
    textAlign: "center",
    fontWeight: "bold",
  },
  info: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});

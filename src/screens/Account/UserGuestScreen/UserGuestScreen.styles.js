import { StyleSheet, Dimensions } from "react-native";

const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  content: {},
  bk: {
    height: ScreenHeight,
    width: ScreenWidth,
    display: "flex",
    justifyContent: "center",
  },
  image: {
    resizeMode: "contain",
    height: 200,
    width: "100%",
    marginBottom: 40,
  },
  text: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    marginBottom: 100,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  description: {
    width: "90%",
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  btnStyle: {
    width: 300,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    marginBottom: 100,
  },
});

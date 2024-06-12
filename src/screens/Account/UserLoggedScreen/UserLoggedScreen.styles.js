import { StyleSheet } from "react-native";
import { Platform } from "react-native";

export const styles = StyleSheet.create({
  btnStyles: {
    marginTop: 30,
    paddingVertical: 10,
    borderRadius: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e3e3e3",
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
  },
  btnTextStyle: {
    color: "#D6445B",
  },
  text: {
    fontSize: 20,
    color: "#D6445B",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  second: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  add: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Platform.OS == "ios" ? 25 : 30,
    height: Platform.OS == "ios" ? 30 : 40,
    width: Platform.OS == "ios" ? 30 : 40,
    backgroundColor: "#D6445B",
  },
});

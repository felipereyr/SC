import { StyleSheet } from "react-native";

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
    margin: 15,
  },
  image: {
    width: 250,
    height: 250,
    marginRight: 15,
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

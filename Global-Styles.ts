import Constants from "expo-constants";
import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
  },
  NavBar: {
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    height: "8%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  Body: {
    height: "80%",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

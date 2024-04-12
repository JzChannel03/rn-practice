import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import GlobalStyles from "./Global-Styles";
import { LinearGradient } from "expo-linear-gradient";
import { Body, CustomText, NavBar } from "./components";

export default function App() {
  const [first, setfirst] = useState(0);

  return (
    <SafeAreaView style={[GlobalStyles.SafeArea]}>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.5, 0.6]}
        colors={["#dce7ff", "#c0d1ff", "#9ab2ff"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      ></LinearGradient>
      <NavBar />
      <Body />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

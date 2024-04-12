import React from "react";
import { Image, View } from "react-native";
import { ImagesAssets } from "../assets";
import GlobalStyles from "../Global-Styles";

const NavBar = () => {
  return (
    <View style={GlobalStyles.NavBar}>
      <Image
        style={{ width: 25, height: 25 }}
        source={ImagesAssets.menuBar}
      ></Image>
      <Image
        source={ImagesAssets.favicon}
        style={{
          width: 30,
          height: 30,
          borderRadius: 50,
          aspectRatio: 1,
          backgroundColor: "white",
        }}
      ></Image>
    </View>
  );
};

export default NavBar;

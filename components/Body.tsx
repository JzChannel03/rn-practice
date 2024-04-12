import React from "react";
import { View } from "react-native";
import GlobalStyles from "../Global-Styles";
import { CustomText } from ".";

const Body = () => {
  return (
    <View style={GlobalStyles.Body}>
      <CustomText>Open up App.tsx to start working on your app!</CustomText>
    </View>
  );
};

export default Body;

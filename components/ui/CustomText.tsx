import { useFonts } from "expo-font";
import { Text, TextProps } from "react-native";

interface CustomTextProps extends TextProps {
  children: string;
}

const CustomText = ({ children, style, ...props }: CustomTextProps) => {
  let [fontsLoaded] = useFonts({
    WixMadeforText: require("../assets/fonts/WixMadeforText.ttf"),
  });
  return (
    <Text style={[style, { fontFamily: "WixMadeforText" }]} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;

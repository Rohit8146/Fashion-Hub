import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import ImagePath from "../constants/ImagePath";
import "./global.css";
export default function Index() {
  return (
    <View className="flex-1 justify-end items-center">
      <ImageBackground
        source={ImagePath.welcome}
        style={{ width: "100%", height: "100%" }}
      />
      <View className="absolute z-20 top-[70%] w-full h-[100vh] p-7">
        <Text className="text-white text-center font-bold text-[30px] pb-5">
          Welcome to Fashion Hub!
        </Text>
        <Text className="text-white text-center text-[20px] text-normal pb-5 text-lg">
          The Home for a Fashionista
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          className="mt-4 bg-white/65 
 border-white border-[2px] px-4 py-4 text-center rounded-full"
        >
          <Text className="text-black text-center text-[18px] font-semibold">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

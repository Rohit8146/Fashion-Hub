import { useRouter } from "expo-router";
import { View } from "react-native";
import BgImage from "../components/ui/BgImage";
import CustomButton from "../components/ui/CustomButton";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";
import ImagePath from "../constants/ImagePath";
import "./global.css";

export default function Index() {
  const router = useRouter();

  const handlePress = () => {
    router.push("./ExtraInfo");
  };

  return (
    <View className="flex-1 justify-end items-center">
      <BgImage path={ImagePath.welcome} />
      <View className="absolute z-20 top-[70%] w-full h-[100vh] p-7">
        <Heading title="Welcome to Fashion Hub!" styleClass="text-white text-center" />
        <Paragraph
          content="The Home for a Fashionista"
          styleClass="text-white text-[20px]"
        />
        <CustomButton title="Get Started" pressHandle={handlePress} />
      </View>
    </View>
  );
}

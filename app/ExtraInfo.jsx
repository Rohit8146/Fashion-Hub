import { useRouter } from "expo-router";
import { View } from "react-native";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import CustomButton from "../components/ui/CustomButton";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";

const ExtraInfo = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push("./(Auth)/Login");
    console.log("helluiu");
  };
  return (
    <View className="flex justify-center items-center w-full h-[100vh]">
      <View className="flex justify-center items-center w-full h-[60vh] bg-white"></View>
      <View className="flex jusify-center items-center w-full h-[40vh] bg-[#464447]"></View>
      <View className="flex w-full h-[100vh] items-center justify-center absolute z-10">
        <Heading
          title="Discover something new"
          styleClass="text-black text-center"
        />
        <Paragraph
          content="Special new arrivels just for you"
          styleClass="text-black text-2xl"
        />
        <View className="flex justify-center items-center pt-10 w-full h-[50vh]">
          <ImageSlider />
        </View>
        <View className="block pt-12 w-[80%]">
          <CustomButton title="Shopping Now" pressHandle={handlePress} />
        </View>
      </View>
    </View>
  );
};

export default ExtraInfo;

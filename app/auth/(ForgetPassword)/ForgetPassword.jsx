import { useRouter } from "expo-router";
import { Image, View } from "react-native";
import Heading from "../../../components/ui/Heading";
import InputField from "../../../components/ui/InputField";
import CustomButton from "./../../../components/ui/CustomButton";
import Paragraph from "./../../../components/ui/Paragraph";

const ForgetPassword = () => {
  const router = useRouter();

  function handleSubmit() {
    router.push("../OtpVaildation/");
  }


  return (
    <View className="flex h-[100vh] w-[100%] p-7 justify-start pt-[150px] items-start">
      <View className="flex pb-20">
        <Heading
          title="Forget Password ?"
          styleClass="text-2xl/[26px] font-medium"
        />
        <Paragraph
          content="Enter the email associated with your account, and we’ll send an email with instructions to reset your password."
          styleClass="text-blod text-[18px]/[26px] font-normal py-3"
        />
      </View>
      <View className="flex flex-row border-b-[1px] gap-3 border-[#D6D6D6] w-[100%] py-2">
        <View className="flex justify-center items-end">
          <Image
            source={require("../../../assets/images/email-icon.png")}
            style={{ width: 20, height: 20, resizeMode: "contain" }}
          />
        </View>
        <InputField
          placeholder="Enter You Email"
          type="email-address"
          fieldType="email"
        />
      </View>
      <CustomButton
        title="Submit"
        pressHandle={handleSubmit}
        styleClass="bg-black w-[200px] mt-[50px] mx-auto"
        textstyle="text-white uppercase text-[20px]"
      />
    </View>
  );
};

export default ForgetPassword;

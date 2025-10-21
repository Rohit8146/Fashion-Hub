import { useRouter } from "expo-router";
import { View } from "react-native";
import CustomButton from "../../../components/ui/CustomButton";
import Heading from "../../../components/ui/Heading";
import InputField from "../../../components/ui/InputField";
import Link from "../../../components/ui/Link";
import Paragraph from "../../../components/ui/Paragraph";

const Login = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("../ForgetPassword/");
  };

  const signUpHandle = () => {
    router.push("../Register/");
  };

  const handleLogin = () => {
    console.log("logined !!!!!");
  };
  return (
    <View className="flex justify-center items-center h-[100vh] w-full p-7 ">
      <Heading
        title="Log into your Account"
        styleClass="text-black font-medium text-[40px]/[55px]"
      />
      <View className="flex-col justify-start items-center w-[100%] h-[50vh] pt-20">
        <View className="border-b-[1px] border-[#D6D6D6] w-[100%] py-2">
          <InputField
            placeholder="Enter Your Email Address"
            type="email-address"
            fieldType="email"
            form="Login"
          />
        </View>
        <View className="border-b-[1px] border-[#D6D6D6] w-[100%] py-2 mt-8">
          <InputField
            placeholder="Password"
            type="default"
            fieldType="password"
            form="Login"
          />
        </View>
        <View className="flex justify-end py-3 w-full pt-10">
          <Link title="Forget Password ?" handleClick={handleClick} />
        </View>
        <View className="w-[200px]">
          <CustomButton
            title="Login"
            pressHandle={handleLogin}
            styleClass="w-[200px] bg-black"
            textstyle="text-white uppercase"
          />
        </View>
        <View className="justify-center items-center flex-row w-[100%] h-[45vh] px-20 gap-3 py-10">
          <Paragraph
            content="Don't have an acount ?"
            styleClass="w-fit text-[18px] pb-0"
          />
          <Link
            title="Sign Up"
            handleClick={() => signUpHandle()}
            linkStyle="text-[16px] pb-0 underline"
          />
        </View>
      </View>
    </View>
  );
};

export default Login;

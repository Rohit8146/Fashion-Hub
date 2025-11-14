import { useRouter } from "expo-router";
import { View } from "react-native";
import CustomButton from "./../../components/ui/CustomButton";
import Heading from "./../../components/ui/Heading";
import InputField from "./../../components/ui/InputField";
import Link from "./../../components/ui/Link";
import Paragraph from "./../../components/ui/Paragraph";
import PasswordField from "./../../components/ui/PasswordField";

const Register = () => {
  const router = useRouter();
  const handleRegister = () => {
    console.log("registered !!!!!");
  };
  const loginUpHandle = () => {
    router.push("../Login/");
  };

  return (
    <View className="flex justify-start h-[100%] items-left p-7 pt-32">
      <View>
        <Heading
          title="Create"
          styleClass="text-black font-medium text-[36px]/[36px]"
        />
        <Heading
          title="your Account"
          styleClass="text-black font-medium text-[36px]/[40px]"
        />
      </View>
      <View>
        <View className="border-b-[1px] border-[#D6D6D6] w-[100%] py-2 mt-8">
          <InputField
            placeholder="Enter Your Name"
            type="default"
            form="Register"
            fieldType="name"
          />
        </View>
        <View className="border-b-[1px] border-[#D6D6D6] w-[100%] py-2 mt-8">
          <InputField
            placeholder="Enter Email Address"
            type="email-address"
            fieldType="regEmail"
            form="Register"
          />
        </View>
        <PasswordField
          placeholder="Password"
          type="default"
          fieldType="password"
          form="Register"
        />
        <PasswordField
          placeholder="Confirm Password"
          type="default"
          fieldType="cPassword"
          form="Register"
        />
        <View className="w-[200px] mx-auto mt-16">
          <CustomButton
            title="Sign Up"
            pressHandle={handleRegister}
            styleClass="w-[200px] bg-black"
            textstyle="text-white uppercase"
          />
        </View>
        <View className="justify-center items-center flex-row w-[100%] h-[45vh] px-20 gap-3 py-10 pb-20">
          <Paragraph
            content="Already Have an Account ?"
            styleClass="w-fit text-[18px] pb-0"
          />
          <Link
            title="Login"
            handleClick={() => loginUpHandle()}
            linkStyle="text-[16px] pb-0 underline"
          />
        </View>
      </View>
    </View>
  );
};

export default Register;

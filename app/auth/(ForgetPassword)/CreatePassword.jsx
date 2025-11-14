import { useEffect, useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import CustomButton from "../../../components/ui/CustomButton";
import Heading from "../../../components/ui/Heading";
import Paragraph from "../../../components/ui/Paragraph";
import PasswordField from "../../../components/ui/PasswordField";

const CreatePassword = () => {
  const [isMatched, setIsMatched] = useState(false);
  const { password, cPassword } = useSelector((state) => state.forgetPassword);

   useEffect(() => {
    if (password.length > 0 && cPassword.length > 0) {
      setIsMatched(password === cPassword);
    } else {
      setIsMatched(false);
    }
  }, [password, cPassword]);

  const handleClick = () => {
    console.log("clicked !!!!");
  };

  return (
    <View className="flex justify-start items-start pt-40 px-7 h-[100%]">
      <View>
        <Heading
          title="Create new password"
          styleClass="text-black font-medium text-[32px]/[36px]"
        />
        <Paragraph
          content="Your new password must be different from previously used password"
          styleClass="text-bold text-[18px]/[26px] font-normal py-3 pb-20"
        />
      </View>
      <View>
        <PasswordField
          placeholder="Password"
          type="default"
          fieldType="password"
          form="forgetPassword"
        />
        <PasswordField
          placeholder="Confirm Password"
          type="default"
          fieldType="cPassword"
          form="forgetPassword"
        />
      </View>
      <View className="w-[200px] mx-auto mt-16">
        <CustomButton
          title="Sign Up"
          pressHandle={handleClick}
          styleClass="w-[200px] bg-black"
          textstyle="text-white uppercase"
          isMatched={isMatched}
        />
      </View>
    </View>
  );
};

export default CreatePassword;

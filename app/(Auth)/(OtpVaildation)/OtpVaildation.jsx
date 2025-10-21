import { StyleSheet, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import Heading from "../../../components/ui/Heading";
import Paragraph from "../../../components/ui/Paragraph";
import ResendOtp from "./ResendOtp";

const OtpValidation = () => {
  return (
    <View className="flex-1 justify-start items-start p-7 pt-[150px] w-full">
      <View className="flex justify-start items-start">
        <Heading
          title="Verification Code"
          styleClass="text-2xl/[26px] font-medium"
        />
        <Paragraph
          content="Please enter verification code we sent to your email address"
          styleClass="text-bold text-[18px]/[26px] font-normal py-3 pb-20"
        />
      </View>
      <View className="flex justify-center items-center">
        <OtpInput
          numberOfDigits={4}
          focusColor="#000000"
          color="#808080"
          onTextChange={(text) => console.log(text)}
          theme={{
            pinCodeContainerStyle: styles.pinCodeContainerStyle,
            pinCodeTextStyle: styles.pinCodeTextStyle,
          }}
        />
      </View>
      <View>
        <ResendOtp />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pinCodeContainerStyle: {
    borderColor: "#A5A7AC",
    borderWidth: 1,
    borderRadius: "50%",
    width: 65,
    height: 65,
  },
  pinCodeTextStyle: {
    color: "#000",
    fontSize: 20,
  },
});

export default OtpValidation;

import { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";

const ResendOtp = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [counter]);
  return (
    <TouchableOpacity
      className="flex flex-row justify-center items-center mt-10 gap-1"
      disabled={counter > 0}
      onPress={() => {
        if (counter === 0) {
          setCounter((60));
          console.log("Resend OTP");
        }
      }}
    >
      <Text className="text-gray-500 text-[18px]">Resend</Text>
      <Text className="text-gray-500 text-[18px]">
        {counter > 0 ? `in 00:${counter < 10 ? `0${counter}` : counter}` : ""}
      </Text>
    </TouchableOpacity>
  );
};

export default ResendOtp;

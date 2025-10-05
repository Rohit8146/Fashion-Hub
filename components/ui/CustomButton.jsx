import { Text, TouchableOpacity } from "react-native";

export default function CustomButton({
  title,
  pressHandle,
  styleClass,
  textstyle,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`mt-4 
 border-white border-[2px] px-4 py-4 text-center rounded-full ${styleClass ? styleClass : "bg-white/65"}`}
      onPress={pressHandle}
    >
      <Text
        className={`text-center text-[18px] font-semibold ${textstyle ? textstyle : "text-black"}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
<<<<<<< HEAD
  ); 
=======
  );
>>>>>>> 333544f0b4cd37cfedd1bca724b6a981f0a19a37
}

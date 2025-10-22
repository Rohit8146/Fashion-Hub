import { Text, TouchableOpacity } from "react-native";

export default function CustomButton({
  title,
  pressHandle,
  styleClass,
  textstyle,
  isMatched,
}) {
  // ✅ Determine whether button should be disabled
  const isDisabled = isMatched !== undefined ? !isMatched : false;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={pressHandle}
      disabled={isDisabled} // ✅ Correct way
      className={`mt-4 border-white border-[2px] px-4 py-4 text-center rounded-full 
        ${styleClass ? styleClass : "bg-white/65"} 
        ${isDisabled ? "opacity-40" : "opacity-100"}`}
    >
      <Text
        className={`text-center text-[18px] font-semibold 
          ${textstyle ? textstyle : "text-black"}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

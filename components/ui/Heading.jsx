import { Text } from "react-native";

export default function Heading({ title, styleClass }) {
  return (
    <Text className={`font-bold text-[30px] pb-5 ${styleClass} `}>
      {title}
    </Text>
  );
}

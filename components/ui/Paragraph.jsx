import { Text } from "react-native";

export default function Paragraph({ content, styleClass }) {
  return (
    <Text className={`"text-center font-medium "${styleClass ? styleClass : "pb-5"} `}>
      {content}
    </Text>
  );
}

import { Text } from "react-native";

export default function Paragraph({ content, styleClass }) {
  return (
    <Text className={`${styleClass} text-center font-medium pb-5`}>
      {content}
    </Text>
  );
}

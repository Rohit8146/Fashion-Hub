import { Text, TouchableOpacity } from "react-native";

const Link = ({ title, handleClick, linkStyle }) => {
  return (
    <TouchableOpacity
      className="text-gray-500 text-[20px] w-fit text-right"
      onPress={handleClick}
    >
      <Text className={`text-right w-fit my-0 ${linkStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

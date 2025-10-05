import { TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword } from "../../redux/loginSlice";

const InputField = ({ placeholder, type, fieldType }) => {
  const data = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const changeHandle = (text) => {
    if (fieldType == "password") {
      dispatch(setPassword(text));
    } else {
      dispatch(setEmail(text));
    }
  };

  return (
    <TextInput
      className="text-black text-[18px] text-left placeholder-black"
      placeholder={placeholder}
      keyboardType={type}
      placeholderTextColor="#000"
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={fieldType == "password" ? true : false}
      value={data[fieldType]}
      onChangeText={(text) => changeHandle(text)}
    />
  );
};

export default InputField;

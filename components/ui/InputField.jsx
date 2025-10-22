import { TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../redux/loginSlice";
import { setName, setRegEmail } from "../../redux/RegisterSlice";

const InputField = ({ placeholder, type, fieldType, form }) => {
  const data = useSelector((state) => state.login);
  const registerData = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const changeHandle = (text) => {
    if (form == "Register") {
      if (fieldType === "name") {
        console.log(text);
        dispatch(setName(text));
      } else if (fieldType === "regEmail") {
        dispatch(setRegEmail(text));
      }
    } else if (form === "Login") {
      dispatch(setEmail(text));
    }
  };
  const value = form === "Register" ? registerData[fieldType] : data[fieldType];

  return (
    <TextInput
      className="text-black text-[18px] text-left placeholder-black"
      placeholder={placeholder}
      keyboardType={type}
      placeholderTextColor="#000"
      autoCapitalize="none"
      autoCorrect={false}
      value={value}
      onChangeText={(text) => changeHandle(text)}
    />
  );
};

export default InputField;

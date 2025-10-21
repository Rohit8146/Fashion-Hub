import { TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword } from "../../redux/loginSlice";
import {
  setConfirmPassword,
  setName,
  setRegEmail,
  setRegPassword,
} from "../../redux/RegisterSlice";

const InputField = ({ placeholder, type, fieldType, form }) => {
  console.log(form);
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
      } else if (fieldType === "password") {
        dispatch(setRegPassword(text));
      } else if (fieldType === "cPassword") {
        dispatch(setConfirmPassword(text));
      }
    } else if (form === "Login") {
      if (fieldType == "password") {
        dispatch(setPassword(text));
      } else {
        dispatch(setEmail(text));
      }
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
      secureTextEntry={fieldType === "password" || fieldType === "cPassword"}
      value={value}
      onChangeText={(text) => changeHandle(text)}
    />
  );
};

export default InputField;

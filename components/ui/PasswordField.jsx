import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setConfirmPassword, setRegPassword } from "../../redux/RegisterSlice";

import {
  setForConfirmPassword,
  setForPassword,
} from "../../redux/forgetPasswordSlice";
import { setPassword } from "../../redux/loginSlice";

const PasswordField = ({ placeholder, type, fieldType, form }) => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.login);
  const registerData = useSelector((state) => state.register);
  const forgetPasswordData = useSelector((state) => state.forgetPassword);
  let value;
  if (form === "Register") {
    value = registerData[fieldType];
  } else if (form === "Login") {
    value = loginData[fieldType];
  } else {
    value = forgetPasswordData[fieldType];
  }

  const changeHandle = (text) => {
    if (form == "Register") {
      if (fieldType === "password") {
        dispatch(setRegPassword(text));
      } else if (fieldType === "cPassword") {
        dispatch(setConfirmPassword(text));
      }
    } else if (form === "Login") {
      if (fieldType == "password") {
        dispatch(setPassword(text));
      }
    } else if (form === "forgetPassword") {
      if (fieldType === "password") {
        dispatch(setForPassword(text));
      } else if (fieldType === "cPassword") {
        dispatch(setForConfirmPassword(text));
      }
    }
  };

  return (
    <View className="flex flex-row justify-between items-center border-b-[1px] border-[#d5d5d5] w-[100%] py-2 mt-8">
      <TextInput
        className="text-black text-[18px] text-left placeholder-black w-[85%]"
        placeholder={placeholder}
        keyboardType={type}
        placeholderTextColor="#000"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={showPassword ? false : true}
        value={value}
        onChangeText={(text) => changeHandle(text)}
      />
      <TouchableOpacity
        className="w-[10%]"
        onPress={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <Entypo name="eye-with-line" size={24} color="black" />
        ) : (
          <Entypo name="eye" size={24} color="black" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PasswordField;

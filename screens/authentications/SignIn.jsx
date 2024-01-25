import { TextInput, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./signin.style";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { COLOR, SIZES } from "../../constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HeightSpacer, RenewnableBtn, WidthSpacer } from "../../components";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),

  email: Yup.string().email("Provided valid email").required("Required"),
});

const SignIn = () => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(value) => {
            console.log(value);
        }}
      >
        {({
          handleChange,
          setFieldTouched,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
        }) => (
          <View style={{paddingTop: 30}}>
            <View style={styles.wrappper}>
              <Text style={styles.Label}>Email</Text>
              <View>
                <View
                  style={styles.inputWrapper(
                    touched.email ? COLOR.lightblue : COLOR.lightgray
                  )}
                >
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color={COLOR.gray}
                  />

                  <WidthSpacer width={10} />

                  <TextInput
                    placeholder="Enter your email...."
                    onFocus={() => {
                      setFieldTouched("email");
                    }}
                    onBlur={() => {
                      setFieldTouched("email", "");
                    }}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />
                </View>

                {touched.email && errors.email && (
                  <Text style={styles.errorMessage}>{errors.email}</Text>
                )}
              </View>
            </View>

            <View style={styles.wrappper}>
              <Text style={styles.Label}>Password</Text>
              <View>
                <View
                  style={styles.inputWrapper(
                    touched.email ? COLOR.lightblue : COLOR.lightgray
                  )}
                >
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={20}
                    color={COLOR.gray}
                  />
                 

                  <WidthSpacer width={10} />
                  

                  <TextInput
                    secureTextEntry={obsecureText}
                    placeholder="Enter your password...."
                    onFocus={() => {
                      setFieldTouched("password");
                    }}
                    onBlur={() => {
                      setFieldTouched("password", "");
                    }}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}

                    
                  />

                  <TouchableOpacity
                    onPress={() => {
                      setObsecureText(!obsecureText);
                    }}
                  >
                    <MaterialCommunityIcons
                      name={obsecureText ? "eye-outline" : "eye-off-outline"}
                      size={18}
                    />
                  </TouchableOpacity>
                </View>

                {touched.password && errors.password && (
                  <Text style={styles.errorMessage}>{errors.password}</Text>
                )}
              </View>
            </View>

            <HeightSpacer height={20} />

            <RenewnableBtn
              onPress={handleSubmit}
              btnText={"SIGN IN"}
              width={SIZES.width - 50}
              backgroundColor={COLOR.green}
              borderColor={COLOR.green}
              borderWidth={0}
              textColor={COLOR.white}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;

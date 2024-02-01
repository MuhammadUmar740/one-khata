import React from "react";
import { StyleSheet, View, Image } from "react-native";
import * as Yup from "yup";

import colors from "../config/colors";
import Form from "../components/form/Form";
import PhoneField from "../components/form/PhoneField";
import Screen from "../components/Screen";
import SubmitButton from "../components/form/SubmitButton";
import Text from "../components/Text";

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .required("Please enter your phone number")
    .matches(
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      "Please enter a valid phone number"
    ),
});

function Login({ navigation }) {
  return (
    <Screen style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Form
        initialValues={{
          phone: "",
          country: {
            dial_code: "+92",
            flag: " 🇵🇰 ",
          },
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          if (values) {
            navigation.navigate("AppNavigation");
          }
        }}
      >
        <PhoneField name={"phone"} placeholder={"Enter your phone number"} />
        <View style={styles.button}>
          <SubmitButton title={"Continue"} color={colors.primary} />
        </View>
      </Form>
      <Text style={styles.createNewAccount}>create new account</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  button: {
    width: "40%",
    alignSelf: "center",
  },
  container: {
    flex: 1,
    gap: 50,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  createNewAccount: {
    color: colors.primary,
    fontSize: 14,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  logo: {
    height: 150,
    width: "100%",
  },
});

export default Login;

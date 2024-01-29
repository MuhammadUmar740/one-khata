import React from "react";
import { StyleSheet, TextInput } from "react-native";
import colors from "../config/colors";

function AppTextInput({ placeholder, ...otherprops }) {
  return (
    <TextInput style={styles.input} placeholder={placeholder} {...otherprops} />
  );
}

const styles = StyleSheet.create({
  container: {},
  input: {
    width: "100%",
    height: 60,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.light,
  },
});

export default AppTextInput;

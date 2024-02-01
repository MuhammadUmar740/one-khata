import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function AppTextInput({
  icon,
  onIconPress,
  placeholder,
  style,
  ...otherprops
}) {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        {...otherprops}
      />
      {icon && (
        <TouchableWithoutFeedback onPress={onIconPress}>
          <View style={[styles.icon]}>
            <MaterialCommunityIcons name={icon} size={15} color={colors.dark} />
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: colors.light,
    borderRadius: 10,
    padding: 10,
    height: 60,
  },
  icon: {
    width: 55,
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderColor: colors.medium,
  },
  input: {
    flex: 1,
  },
});

export default AppTextInput;

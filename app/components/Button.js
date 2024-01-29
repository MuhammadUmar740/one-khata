import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Text from "../components/Text";
import colors from "../config/colors";

function Button({ title, onPress, color }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { backgroundColor: color }]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    alignItems: "center",
    borderRadius: 30,
    justifyContent: "center",
  },
  text: {
    color: colors.white,
  },
});

export default Button;

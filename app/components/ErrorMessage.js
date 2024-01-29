import React from "react";
import { StyleSheet } from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return;
  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
    fontSize: 14,
  },
});

export default ErrorMessage;

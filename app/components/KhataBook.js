import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Text from "../components/Text";

function KhataBook({ created_at, icon, title, type, style }) {
  return (
    <View style={[styles.khataBookContainer, style]}>
      <View style={styles.KhataBookInner}>
        <Text>{title}</Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.KhataBookType}>
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.primary}
            />
            <Text style={styles.khataBookText}>({type})</Text>
          </View>
          <Text style={styles.khataBookText}>{created_at}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  khataBookText: {
    fontSize: 14,
  },
  KhataBookInner: {
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: colors.white,
    width: "100%",
    gap: 10,
    justifyContent: "center",
    padding: 10,
  },
  khataBookContainer: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 20,
    gap: 20,
    padding: 13,
    width: 300,
  },
  KhataBookType: { gap: 5, flexDirection: "row" },
});

export default KhataBook;

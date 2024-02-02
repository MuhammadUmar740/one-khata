import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Text from "../components/Text";

function ListItem({ name, imageUrl, phoneNumber }) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        {!imageUrl ? (
          <MaterialCommunityIcons
            name="account"
            size={30}
            color={colors.dark}
          />
        ) : (
          <Image source={imageUrl} style={styles.image} resizeMode="cover" />
        )}
      </View>
      <View>
        {name && <Text style={styles.name}>{name}</Text>}
        <Text style={styles.phoneNumber}>{phoneNumber}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    flexDirection: "row",
    gap: 15,
    paddingVertical: 10,
  },
  icon: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    overflow: "hidden",
    width: 50,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  name: {
    fontSize: 15,
  },
  phoneNumber: {
    fontSize: 14,
    color: colors.gray,
  },
});

export default ListItem;

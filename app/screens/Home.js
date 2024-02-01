import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Screen from "../components/Screen";
import Form from "../components/form/Form";
import TextField from "../components/form/TextField";

function Home(props) {
  return (
    <Screen style={{ padding: 10 }}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          alignItems: "center",
        }}
      >
        <Form
          initialValues={{ global_search: "" }}
          onSubmit={(value) => console.log(value)}
        >
          <View style={{ flex: 1 }}>
            <TextField
              icon="magnify"
              name="global_search"
              onIconPress={() => console.log("pressed")}
              placeholder="search here"
              style={{ borderRadius: 40, paddingLeft: 20, height: 50 }}
            />
          </View>
        </Form>
        <MaterialCommunityIcons name="bell" size={25} color={colors.dark} />
        <Image
          source={require("../assets/user.jpg")}
          style={{ height: 40, width: 40, borderRadius: 20 }}
          resizeMode="cover"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Home;

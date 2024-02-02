import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Screen from "../components/Screen";
import Form from "../components/form/Form";
import Text from "../components/Text";
import TextField from "../components/form/TextField";
import KhataBook from "../components/KhataBook";

function Home(props) {
  return (
    <Screen style={styles.container}>
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
              placeholder="Search here..."
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
      <View>
        <Text style={styles.createKhataText}>Create a new khata</Text>
        <View style={styles.selectKhataOuter}>
          <View style={styles.allKhataTypesOuter}>
            <View style={styles.khataTypeOuter}>
              <MaterialCommunityIcons
                name="scissors-cutting"
                size={35}
                color={colors.primary}
              />
              <Text style={styles.khataTypeText}>Tailor</Text>
            </View>
            <View style={styles.khataTypeOuter}>
              <MaterialCommunityIcons
                name="account-box"
                size={35}
                color={colors.primary}
              />
              <Text style={styles.khataTypeText}>Accounts</Text>
            </View>
          </View>
          <View style={styles.addNewKhataType}>
            <MaterialCommunityIcons
              size={40}
              name="plus-circle-outline"
              color={colors.primary}
            />
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.createKhataText}>Recent Khatas</Text>
        <ScrollView horizontal>
          <View style={styles.recentKhatas}>
            <KhataBook
              title={"My New Khata"}
              type={"Tailor"}
              created_at={"02-FEB-2024"}
              icon={"scissors-cutting"}
            />
            <KhataBook
              title={"Account Management"}
              type={"Saloon"}
              created_at={"20-FEB-2024"}
              icon={"scissors-cutting"}
            />
            <KhataBook
              title={"Khata 2024"}
              type={"Accounts"}
              created_at={"12-JAN-2024"}
              icon={"account-box"}
            />
          </View>
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  addNewKhataType: {
    backgroundColor: colors.white,
    borderRadius: 50,
  },
  allKhataTypesOuter: {
    flexDirection: "row",
    gap: 10,
  },
  container: {
    padding: 10,
    gap: 20,
  },
  createKhataText: {
    marginBottom: 10,
  },
  khataTypeText: {
    fontSize: 14,
  },
  khataTypeOuter: {
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: colors.white,
    flex: 1,
    gap: 10,
    justifyContent: "center",
    padding: 10,
    width: 50,
  },
  recentKhatas: {
    gap: 15,
    flexDirection: "row",
  },
  selectKhataOuter: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 25,
    gap: 20,
    padding: 20,
    width: "100%",
  },
});

export default Home;

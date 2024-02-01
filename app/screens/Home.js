import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Screen from "../components/Screen";
import Form from "../components/form/Form";
import Text from "../components/Text";
import TextField from "../components/form/TextField";

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
        <Text style={styles.createKhataText}>Manage your customers</Text>
        <View style={styles.selectKhataOuter}>
          <View style={styles.allKhataTypesOuter}>
            <View style={styles.khataTypeOuter}>
              <MaterialCommunityIcons
                name="account-plus"
                size={35}
                color={colors.primary}
              />
              <Text style={styles.khataTypeText}>Add Customer</Text>
            </View>
            <View style={styles.khataTypeOuter}>
              <MaterialCommunityIcons
                name="account-eye"
                size={35}
                color={colors.primary}
              />
              <Text style={styles.khataTypeText}>View Customers</Text>
            </View>
          </View>
        </View>
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

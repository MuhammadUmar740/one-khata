import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { CountryPicker } from "react-native-country-codes-picker";

import colors from "../../config/colors";
import Text from "../Text";
import TextField from "./TextField";
import { useFormikContext } from "formik";

function PhoneField({ name, placeholder }) {
  const [isCountriesVisible, setCountriesVisibility] = React.useState(false);

  const { setFieldValue, values } = useFormikContext();
  const { country } = values;

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setCountriesVisibility(true)}
          style={styles.country}
        >
          <Text style={styles.countryText}>
            {country.flag}
            {country.dial_code}
          </Text>
        </TouchableOpacity>
        <View style={styles.input}>
          <TextField placeholder={placeholder} name={name} />
        </View>
      </View>
      {isCountriesVisible && <CountryPicker
        show
        initialState="+92"
        pickerButtonOnPress={(country) => {
          setFieldValue("country", country);
          setCountriesVisibility(false);
        }}
      />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  country: {
    height: 60,
    backgroundColor: colors.light,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  countryText: {
    fontSize: 14,
    padding: 10,
  },
  input: {
    flex: 1,
    height: "auto",
  },
});

export default PhoneField;

import { Platform } from "react-native";

import colors from "./colors";

export default {
  text: {
    fontFamily: Platform.OS === "ios" ? "HelveticaNeue" : "Roboto",
    color: colors.dark,
    fontSize: 18,
  },
};

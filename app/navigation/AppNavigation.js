import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();
const tabsData = [
  {
    name: "Home",
    component: Home,
    icon: "home",
  },
  {
    name: "Khata",
    component: Home,
    icon: "book-open-blank-variant",
  },
  {
    name: "Customers",
    component: Home,
    icon: "account-group",
  },
  {
    name: "Account",
    component: Home,
    icon: "cog",
  },
];

function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: colors.dark,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      {tabsData.map((tab) => (
        <Tab.Screen
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name={tab.icon}
                size={size}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default AppNavigation;

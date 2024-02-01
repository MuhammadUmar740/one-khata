import { createStackNavigator } from "@react-navigation/stack";
import AppNavigation from "./AppNavigation";
import Login from "../screens/Login";

const Stack = createStackNavigator();

function LoginScreenNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="AppNavigation" component={AppNavigation} />
    </Stack.Navigator>
  );
}

export default LoginScreenNavigation;

import { NavigationContainer } from "@react-navigation/native";

import Login from "./app/screens/Login";
import Home from "./app/screens/Home";
import AppNavigation from "./app/navigation/AppNavigation";
import LoginScreenNavigation from "./app/navigation/LoginScreenNavigation";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <LoginScreenNavigation />
    </NavigationContainer>
  );
}

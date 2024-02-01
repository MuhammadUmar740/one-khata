import { NavigationContainer } from "@react-navigation/native";

import Login from "./app/screens/Login";
import Home from "./app/screens/Home";
import AppNavigation from "./app/navigation/AppNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}

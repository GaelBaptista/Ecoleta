import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
enableScreens();

import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes";
import { useFonts, Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
  });
  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <Routes />
    </>
  );
}

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SecondScreen from "./src/screens/ComponentScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Second: SecondScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "GalleryApp",
    },
  }
);

export default createAppContainer(navigator);

//This is our main component or parent component i.e the Navigator. As we are using multiple screens here
//so we are using this navigation in order to navigate in these screens.

import { createAppContainer } from "react-navigation";//this will be parent container in which all screens will be placed
import { createStackNavigator } from "react-navigation-stack";//this is a specific type of navigation that we are using
//there are other than stack too i.e drawer and tab navigation
import HomeScreen from "./src/screens/HomeScreen";
import SecondScreen from "./src/screens/ComponentScreen";

const navigator = createStackNavigator(
  {
    //create two screens variables
    Home: HomeScreen,
    Second: SecondScreen,
  },
  {
    initialRouteName: "Home",//initial screen is Home i.e app will start from home
    defaultNavigationOptions: {
      title: "GalleryApp",
    },
  }
);

export default createAppContainer(navigator);//export navigator component

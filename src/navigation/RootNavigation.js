import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../screens/Splash";
import Home from "../screens/Home";

const RootStackNav = createStackNavigator();

const RootStack = () => (
  <RootStackNav.Navigator headerMode={"none"} initialRouteName={"Splash"}>
    <RootStackNav.Screen name="Splash" component={Splash} />
    <RootStackNav.Screen name="Home" component={Home} />
  </RootStackNav.Navigator>
);

export default RootStack;

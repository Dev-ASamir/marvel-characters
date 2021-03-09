import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./RootNavigation";

export const navigationRef = React.createRef();

const AppContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default AppContainer;

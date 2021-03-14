import React from "react";
import { StatusBar } from "react-native";
import AppContainer from "./navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Store from "./redux/store";

const App = () => {
  return (
    <Provider store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
        <StatusBar barStyle={"light-content"} />
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;

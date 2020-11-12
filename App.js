import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./src/screens/Home/Home";
import { DetailsScreen } from "./src/screens/DetailsScreen/DetailsScreen";
import { FindTrack } from "./src/screens/SearchTrack/SearchTrack";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerStyle: {
                backgroundColor: "#6666ff",
              },
            }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              title: "Details",
              headerStyle: {
                backgroundColor: "#6666ff",
              },
            }}
          />
          <Stack.Screen
            name="Search"
            component={FindTrack}
            options={{
              title: "Search Track",
              headerStyle: {
                backgroundColor: "#6666ff",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

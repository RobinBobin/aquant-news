/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import { ThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  homeBackgroundColor,
  theme
} from "./src/styles";
import Article from "./src/screens/Article";
import Home from "./src/screens/Home";

const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider
      theme={theme}
    >
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              component={Home}
              name="Home"
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              component={Article}
              name="Article"
              options={{
                headerStyle: {
                  backgroundColor: homeBackgroundColor
                },
                title: ""
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;

import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from "react";

//navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
//Screens.tsでまとめたものをimport
import { HowtoScreen1, MainScreen, SigninScreen, SignupScreen } from "./src/Screens/Screens";
import "./src/Fire"; 
import { logEvent } from './src/@types/firebase';

const Stack = createStackNavigator<RootStackParamList>();
const [count, setCount] = useState(0);

export default function App() {
//   useEffect(() => {
//     logEvent('sample_event');
//   }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen
          name="SignIn"
          component={SigninScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Howto1"
          component={HowtoScreen1}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



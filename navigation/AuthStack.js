import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import AppStack from "./AppStack";
// import AppStack from './AppStack';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [user, setUser] = useState("asd");
  const [isLoading, setIsLoading] = useState(false);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <>
      {
        !user ? (
          <Stack.Navigator>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        ) : (
          <AppStack />
        )
      
      }
    </>
  );
};

export default AuthStack;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Ekranlarınızı burada import edin
import WelcomeScreen from '../pages/Welcome';
import LoginScreen from '../pages/Login';
import RegisterScreen from '../pages/Register';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
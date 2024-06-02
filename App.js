import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './src/LoginScreen';
import SignupScreen from './src/SignupScreen';
import PasswordRecoveryScreen from './src/PasswordRecoveryScreen';
import ServiceScreen from './scr/ServiceScreen';

const Stack = createStackNavigator();

export default function App() {
return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Service" component={ServiceScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="PasswordRecovery" component={PasswordRecoveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

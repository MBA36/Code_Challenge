import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login/login';

const Stack = createNativeStackNavigator();
const AuthenticationStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

export default AuthenticationStack;

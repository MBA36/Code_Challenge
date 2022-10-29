import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import News from '../screens/landing/news/news';
import Logout from '../components/molecules/logoutbutton/logoutButton';

const Stack = createNativeStackNavigator();
const LandingAuthentication = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerRight: () => <Logout />}}
      name="news"
      component={News}
    />
  </Stack.Navigator>
);
export default LandingAuthentication;

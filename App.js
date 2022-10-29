import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import AuthenticationStack from './src/navigations/authenticationStack';
import LandingAuthentication from './src/navigations/authenticated';
import store, {useAppDispatch, useAppSelector} from './src/redux/slices/store';
import {NavigationContainer} from '@react-navigation/native';
import {getAuth} from './src/utils/storage';
import {storeToken} from './src/redux/slices/loginSlice';
const Content = () => {
  const {result} = useAppSelector(state => state.login);
  const disptach = useAppDispatch();
  useEffect(() => {
    const contentUser = async () => {
      const user = await getAuth();
      disptach(storeToken(user));
    };
    contentUser();
  }, []);

  return (
    <NavigationContainer>
      {result === null ? <AuthenticationStack /> : <LandingAuthentication />}
    </NavigationContainer>
  );
};
const App = () => (
  <Provider store={store}>
    <Content />
  </Provider>
);

export default App;

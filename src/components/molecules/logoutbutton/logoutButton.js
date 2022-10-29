import React from 'react';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {logoutUsers} from '../../../redux/slices/loginSlice';
const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutUsers());
  };
  return <Button title={'Logout'} color="black" onPress={onLogout} />;
};
export default LogoutButton;

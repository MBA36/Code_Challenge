import React from 'react';
import { ActivityIndicator } from 'react-native';
const Loading = (props) => {
  return (
    <ActivityIndicator size={props.size} color={props.color} />
  );
};
export default Loading;
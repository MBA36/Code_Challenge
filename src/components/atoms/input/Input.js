import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './input.style';

const Input = (props) => (
  <View style={styles.textContainer}>
    <TextInput {...props} />
  </View>
);

export default Input;

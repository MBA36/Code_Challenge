import React from 'react';
import {TextInput, View } from 'react-native';
import styles  from './search-input-style';

const SearchInput = (props) => (
    <View  style={styles.TextInputView}>
      <TextInput {...props} style={styles.TextInput}/>
    </View>
  );

export default SearchInput;
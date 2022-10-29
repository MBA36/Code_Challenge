import React from 'react';
import {Text, View} from 'react-native';
import styles from './newsList.style';
const NewsList = (props) => {
  return (
    <View style={styles.postView}>
      <View style={styles.coverPhoto}>
        <View style={styles.postTitle}>
          <Text style={styles.textmain}>{props.title}</Text>
          <Text numberOfLines={1} style={styles.abstracttxt}>
            {props.body}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default NewsList;

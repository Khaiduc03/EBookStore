import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStyles from './styles';

const Forum: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.textForum}>Forum</Text>
        </View>
      </View>
    </View>
  );
};

export default Forum;

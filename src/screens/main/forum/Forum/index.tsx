import React from 'react';
import {View} from 'react-native';
import {HeaderCustom} from '../../../../components';
import {ItemListPost} from './components';
import useStyles from './styles';

const Forum: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'users', type: 'font-awesome'}}
        leftIconStyle={styles.leftIcon}
        title="Forum"
      />
      <ItemListPost />
    </View>
  );
};

export default Forum;

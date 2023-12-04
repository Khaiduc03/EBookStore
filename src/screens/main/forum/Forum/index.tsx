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

      <View style={{flex: 1}}>
        <ItemListPost />
      </View>
    </View>
  );
};

export default Forum;

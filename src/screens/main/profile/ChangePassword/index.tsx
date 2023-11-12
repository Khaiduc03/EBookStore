import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {Icon} from '@rneui/themed';
import {HeaderCustom} from '../../../../components';

const ChangePassWord: React.FC = () => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.goBack();
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        title="Change Password"
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        onPressLeftIcon={handlePressGoback}
      />

      <Text
        style={{
          fontSize: 22,
          color: 'red',
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Change password this here !!
      </Text>
    </View>
  );
};

export default ChangePassWord;

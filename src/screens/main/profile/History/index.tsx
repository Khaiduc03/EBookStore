import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {HeaderCustom} from '../../../../components';

const History: React.FC = () => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.navigate(routes.PROFILE);
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-left', type: 'font-awesome-5'}}
        title="History"
        onPressLeftIcon={handlePressGoback}
      />
      <Text style={styles.text}>History</Text>
    </View>
  );
};

export default History;

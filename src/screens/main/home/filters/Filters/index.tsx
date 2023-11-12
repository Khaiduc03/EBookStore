import {Text, View} from 'react-native';

import React from 'react';
import {HeaderCustom} from '../../../../../components';
import useStyles from './styles';
import ItemFilters from './components/RenderItem/Filters';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationService} from '../../../../../navigation';
import {routes} from '../../../../../constants';

const Filters: React.FC = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <HeaderCustom
          title="Filters"
          leftIcon={{
            name: 'arrow-back-outline',
            type: 'ionicon',
            color: styles.colorIcon.color,
          }}
          onPressLeftIcon={() => {
            NavigationService.goBack();
          }}
        />
        <View style={styles.viewItemFilters}>
          <ItemFilters />
        </View>
      </View>
    </View>
  );
};

export default Filters;

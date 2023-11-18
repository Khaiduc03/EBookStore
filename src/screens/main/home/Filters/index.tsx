import React from 'react';
import {View} from 'react-native';
import ItemFilters from './components/RenderItem/ItemFilters';
import useStyles from './styles';
import {HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';

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

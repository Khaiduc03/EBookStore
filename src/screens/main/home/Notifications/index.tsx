import React from 'react';
import {View} from 'react-native';
import useStyles from './styles';
import HeaderCustomV1 from '../../../../components/customs/HeaderCustomV1';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import ItemNotifications from './components/RenderItem/ItemNotifications';

const Notifications: React.FC = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.body}>
          <HeaderCustomV1
            title="Notification"
            titleStyle={styles.textHeader}
            leftIcon={{
              name: 'arrow-back-outline',
              type: 'ionicon',
              color: styles.colorIconSetting.color,
            }}
            onPressLeftIcon={() => NavigationService.goBack()}
            rightIconRight={{
              name: 'settings-outline',
              type: 'ionicon',
              color: styles.colorIconSetting.color,
              size: 22,
            }}
            onPressRightIconRight={() =>
              NavigationService.navigate(routes.SETTINGS)
            }
          />
          <View style={{width: '100%', height: '100%'}}>
            <ItemNotifications />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Notifications;

import React from 'react';
import {View} from 'react-native';
import HeaderCustomV1 from '../../../../components/customs/HeaderCustomV1';
import {routes} from '../../../../constants';
import {NavigationService} from '../../../../navigation';
import Notifications from './Notifications/components/RenderItem/Notifications';
import useStyles from './styles';

const NotificationsScreen: React.FC = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.body}>
          <HeaderCustomV1
            title="Notification"
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
            }}
            onPressRightIconRight={() =>
              NavigationService.navigate(routes.SETTINGS)
            }
          />
          <View style={{width: '100%', height: '100%'}}>
            <Notifications />
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotificationsScreen;

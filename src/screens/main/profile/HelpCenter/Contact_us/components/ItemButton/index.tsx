import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import ButtonLong from '../ButtonLong';
import {NavigationService} from '../../../../../../../navigation';
import {routes} from '../../../../../../../constants';

const ItemButton: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={{gap: 100}}>
      <ButtonLong
        icon_Service
        title="Customer Service"
        onPressScreen={() => NavigationService.navigate(routes.CUSTOMERSERVICE)}
      />
      <ButtonLong
        icon_Facebook
        title="Facebook"
        onPressScreen={() => NavigationService.navigate(routes.FACEBOOK)}
      />
      <ButtonLong
        icon_Discord
        title="Discord"
        onPressScreen={() => NavigationService.navigate(routes.DISCORD)}
      />
    </View>
  );
};

export default ItemButton;

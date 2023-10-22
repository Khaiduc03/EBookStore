import {View, Text, Alert} from 'react-native';
import React from 'react';
import useStyles from './styles';
import ButtonLong from '../ButtonLong';
import {NavigationService} from '../../../../../../../navigation';
import {routes} from '../../../../../../../constants';

const ItemButton: React.FC = () => {
  const styles = useStyles();
  const handlebtnFacebook = () => {
    Alert.alert('Link Facebook this here ', 'You pressed the Facebook button');
  };
  const handlebtnDiscord = () => {
    Alert.alert('Link Discord this here ', 'You pressed the Discord button');
  };
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
        onPressScreen={handlebtnFacebook}
      />
      <ButtonLong
        icon_Discord
        title="Discord"
        onPressScreen={handlebtnDiscord}
      />
    </View>
  );
};

export default ItemButton;

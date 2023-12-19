import React from 'react';
import {Alert, View} from 'react-native';
import {routes} from '../../../../../../../constants';
import {NavigationService} from '../../../../../../../navigation';
import ButtonLong from '../ButtonLong';

const ItemButton: React.FC = () => {
  const handlebtnFacebook = () => {
    Alert.alert('Link Facebook this here ', 'You pressed the Facebook button');
  };
  const handlebtnDiscord = () => {
    Alert.alert('Link Discord this here ', 'You pressed the Discord button');
  };
  return (
    <View>
      <ButtonLong
        title="Customer Service"
        nameIcon="user-astronaut"
        colorIcon="#f89300"
        backgroundColor={{backgroundColor: '#F4E4CC'}}
        typeIcon="font-awesome-5"
        onPressScreen={() => NavigationService.navigate(routes.CUSTOMERSERVICE)}
      />
      <ButtonLong
        title="Facebook"
        nameIcon="facebook"
        colorIcon="#2E81FF"
        backgroundColor={{backgroundColor: '#DCF7F7'}}
        typeIcon="font-awesome-5"
        onPressScreen={handlebtnFacebook}
      />
      <ButtonLong
        title="Discord"
        nameIcon="discord"
        colorIcon="#5964F2"
        backgroundColor={{backgroundColor: 'rgba(249, 220, 250, 1)'}}
        typeIcon="material"
        onPressScreen={handlebtnDiscord}
      />
    </View>
  );
};

export default ItemButton;

import React from 'react';
import {View} from 'react-native';
import HeaderCustom from '../../../../components/customs/HeaderCustom';
import {routes} from '../../../../constants';
import {NavigationService} from '../../../../navigation';
import useStyles from './styles';
import {Pay} from './components';
import {BigButton} from '../../../../components';

const Payments_method: React.FC = () => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.goBack();
  };

  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        title="Payments Method"
        onPressLeftIcon={handlePressGoback}
      />
      <Pay icGoogle title="Google Pay" />
      <Pay icZaloPay title="Zalo Pay" />
      <Pay icPaypal title="Paypal" />
      <View style={{paddingHorizontal:20}}>
        <BigButton
          textButton="Add"
          onPressButton={() => NavigationService.navigate(routes.ADDPAYMENT)}
        />
      </View>
    </View>
  );
};

export default Payments_method;

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import useStyles from './styles';
import {images} from '../../../../../../assets';
import {PayProps} from './types';
import {theme} from '../../../../../../theme';
import {GoogleIcon, ZaloPay} from '../../../../../../assets/icons';
import Memo from '../../../../../../assets/icons/GoogleIcon';
import Paypal from '../../../../../../assets/icons/PaypalIcon';

const ItemBill: React.FC<PayProps> = props => {
  const {title, icGoogle, icPaypal, icZaloPay} = props;
  const styles = useStyles();
  const [isConnected, setIsConnected] = useState(true);

  const toggleConnection = () => {
    Alert.alert(
      'Confirm Change',
      'Do you want to change the payment method?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // Người dùng chọn OK, thực hiện thay đổi
            setIsConnected(!isConnected);
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.payment}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {icGoogle && <Memo width={64} height={64} viewBox="7 2 25 50" />}
        {icPaypal && <Paypal width={64} height={64} viewBox="7 0 16 45" />}
        {icZaloPay && (
          <ZaloPay width={64} height={64} viewBox="7 -130 16 345" />
        )}
        <Text style={styles.textName}>{title}</Text>
      </View>

      <TouchableOpacity onPress={toggleConnection}>
        <Text style={styles.textChange}>Change</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemBill;

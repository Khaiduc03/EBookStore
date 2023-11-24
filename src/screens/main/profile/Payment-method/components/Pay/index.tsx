import React, {useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import useStyles from './styles';

import {ZaloPay} from '../../../../../../assets/icons';
import Memo from '../../../../../../assets/icons/GoogleIcon';
import Paypal from '../../../../../../assets/icons/PaypalIcon';
import {theme} from '../../../../../../theme';
import {PayProps} from './types';

const Pay: React.FC<PayProps> = props => {
  const {title, icGoogle, icPaypal, icZaloPay} = props;
  const styles = useStyles();
  const [isConnected, setIsConnected] = useState(true);
  const toggleConnection = () => {
    if (isConnected) {
      Alert.alert(
        'Confirmation',
        'Are you sure you want to Connected?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Connected',
            onPress: () => {
              setIsConnected(false);
              Alert.alert('Connected', 'Your payment method is now Connected.');
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      setIsConnected(true);
      Alert.alert('Disconnected', 'Your payment method is now Disconnected.');
    }
  };

  const textStyles = [
    styles.textConnect,
    {color: isConnected ? theme?.lightColors?.green : theme?.lightColors?.red},
  ];
  return (
    <View style={styles.payment}>
      {icGoogle && <Memo width={64} height={64} viewBox="7 2 25 50" />}

      {icPaypal && <Paypal width={64} height={64} viewBox="7 0 16 45" />}
      {icZaloPay && <ZaloPay width={64} height={64} viewBox="7 -130 16 345" />}
      <Text style={styles.textName}>{title}</Text>
      <TouchableOpacity onPress={toggleConnection}>
        <Text style={textStyles}>
          {isConnected ? 'Connected' : 'Disconnect'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pay;

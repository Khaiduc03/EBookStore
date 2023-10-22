import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';

import {images} from '../../../../../../assets';
import {PayProps} from './types';
import {theme} from '../../../../../../theme';
import {GoogleIcon, ZaloPay} from '../../../../../../assets/icons';
import Memo from '../../../../../../assets/icons/GoogleIcon';
import Paypal from '../../../../../../assets/icons/PaypalIcon';

const Pay: React.FC<PayProps> = props => {
  const {title, icGoogle, icPaypal, icZaloPay} = props;
  const styles = useStyles();
  const [isConnected, setIsConnected] = useState(true);
  const toggleConnection = () => {
    setIsConnected(!isConnected);
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

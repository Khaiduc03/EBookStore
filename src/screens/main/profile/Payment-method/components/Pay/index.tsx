import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';

import {images} from '../../../../../../assets';
import {PayProps} from './types';
import {theme} from '../../../../../../theme';
import {GoogleIcon} from '../../../../../../assets/icons';

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
      {icGoogle && <GoogleIcon width={64} height={64} fill={'#000000'} />}

      {icPaypal && <Image style={styles.icon} source={images.ic_Paypal} />}
      {icZaloPay && <Image style={styles.icon} source={images.ic_ZaloPay} />}
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

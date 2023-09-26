import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';

import {images} from '../../../../../assets';
import {PayProps} from './types';

const Pay: React.FC<PayProps> = props => {
  const {title, icGoogle, icPaypal, icZaloPay} = props;
  const styles = useStyles();
  const [isConnected, setIsConnected] = useState(true);
  const toggleConnection = () => {
    setIsConnected(!isConnected);
  };
  const textStyles = [
    styles.textConnect,
    {color: isConnected ? '#3BD74B' : '#FF0000'},
  ];
  return (
    <View style={styles.payment}>
      {icGoogle && <Image style={styles.icon} source={images.ic_Google} />}
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
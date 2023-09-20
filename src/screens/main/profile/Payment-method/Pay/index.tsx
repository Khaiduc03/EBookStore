import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import useStyles from './styles'
import { routes } from '../../../../../constants'
import { NavigationService } from '../../../../../navigation'
import HeaderCustom from '../../../../../components/customs/HeaderCustom'
import { images } from '../../../../../assets'
import { PayProps } from './types'

const Pay: React.FC<PayProps> = (props) => {
    const { title, icGoogle, icPaypal, icZaloPay } = props;
    const styles = useStyles();
    const [isConnected, setIsConnected] = useState(true); // Ban đầu kết nối

    const toggleConnection = () => {
        // Khi người dùng bấm vào, thay đổi trạng thái kết nối
        setIsConnected(!isConnected);
    };
    const textStyles = [styles.TextConnect, { color: isConnected ? '#3BD74B' : '#FF0000' }];
    return (
        <View>
            <View style={styles.Payment}>
                {icGoogle && <Image style={styles.Icon} source={images.ic_Google} />}
                {icPaypal && <Image style={styles.Icon} source={images.ic_ZaloPay} />}
                {icZaloPay && <Image style={styles.Icon} source={images.ic_Paypal} />}
                <Text style={styles.TextName}>{title}</Text>
                <TouchableOpacity onPress={toggleConnection}>
                    <Text style={textStyles}>{isConnected ? 'Connected' : 'Disconnect'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Pay
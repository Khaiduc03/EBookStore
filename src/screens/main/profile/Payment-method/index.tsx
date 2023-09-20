import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import useStyles from './styles'
import { images } from '../../../../assets'
import { ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../../../../constants'
import { NavigationService } from '../../../../navigation'
import HeaderCustom from '../../../../components/customs/HeaderCustom'
import { ServiceType } from './types';


const Payments_method: React.FC = () => {
    const styles = useStyles();
    const handlePressGoback = () => {
        NavigationService.navigate(routes.PROFILE);
    };
    const initialStates: Record<ServiceType, boolean> = {
        'Google Pay': true,
        'Zalo Pay': true,
        'PayPal': true,
    };
    const [connected, setConnected] = useState(initialStates);
    const toggleConnection = (service: ServiceType) => {
        setConnected({
            ...connected,
            [service]: !connected[service]
        });
    };
    const renderPaymentRow = (service: ServiceType, iconSource: ImageSourcePropType) => (
        <View style={styles.Payment} key={service}>
            <Image style={styles.Icon} source={iconSource} />
            <Text style={styles.TextName}>{service}</Text>
            <TouchableOpacity onPress={() => toggleConnection(service)}>
                <Text style={[styles.TextConnect, { color: connected[service] ? '#3BD74B' : '#FF0000' }]}>
                    {connected[service] ? 'Connected' : 'Disconnect'}
                </Text>
            </TouchableOpacity>
        </View>
    );
    return (
        <View style={styles.container}>
            <HeaderCustom leftIcon={{ name: 'arrow-left', type: 'font-awesome-5' }} title='Payments Method'
                onPressLeftIcon={handlePressGoback} />
            {renderPaymentRow('Google Pay', images.ic_Google)}
            {renderPaymentRow('Zalo Pay', images.ic_ZaloPay)}
            {renderPaymentRow('PayPal', images.ic_Paypal)}


        </View>
    )
}

export default Payments_method;

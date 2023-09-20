import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import useStyles from './styles'
import { routes } from '../../../../constants'
import { NavigationService } from '../../../../navigation'
import HeaderCustom from '../../../../components/customs/HeaderCustom'
import SvgImage from 'react-native-svg/lib/typescript/elements/Image';
import { GoogleIcon } from '../../../../assets/icons';
import { Svg } from 'react-native-svg'
import { images } from '../../../../assets'


const Payments_method: React.FC = () => {
    const styles = useStyles();
    const handlePressGoback = () => {
        NavigationService.navigate(routes.PROFILE);
    };
    return (
        <View style={styles.container}>
            <HeaderCustom leftIcon={{ name: 'arrow-left', type: 'font-awesome-5' }} title='Payments Method'
                onPressLeftIcon={handlePressGoback} />
            {/* {connected[service] ? 'Connected' : 'Disconnect'} */}
        </View>
    )
}

export default Payments_method;

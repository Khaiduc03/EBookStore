import { View, Text } from 'react-native'
import React from 'react'
import usestyles from './styles'
import { NavigationService } from '../../../../navigation';
import { routes } from '../../../../constants';
import { HeaderCustom } from '../../../../components';

const BecomeVIP: React.FC = () => {
    const styles = usestyles();
    const handlePressGoback = () => {
        NavigationService.navigate(routes.PROFILE);
    };
    return (
        <View style={styles.container}>
            <HeaderCustom leftIcon={{ name: 'arrow-left', type: 'font-awesome-5' }} title='Become Member VIP'
                onPressLeftIcon={handlePressGoback} />
            <Text style={{ fontSize: 50 }}>Screen Member VIP this here!!!!!!</Text>
        </View>
    )
}

export default BecomeVIP
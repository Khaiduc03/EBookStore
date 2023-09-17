import { View, Text } from 'react-native'
import React from 'react'
import usestyles from './styles'
import Header from '../../../../components/customs/Headers';
import { NavigationService } from '../../../../navigation';
import { routes } from '../../../../constants';

const BecomeVIP: React.FC = () => {
    const styles = usestyles();
    const handlePressGoback = () => {
        NavigationService.navigate(routes.PROFILE);
    };
    return (
        <View style={styles.container}>
            <Header leftIcon onPressLeftIcon={handlePressGoback} title='Become Member VIP' istitle />
            <Text style={{ fontSize: 50 }}>Screen Member VIP this here!!!!!!</Text>
        </View>
    )
}

export default BecomeVIP
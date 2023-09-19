import { View, Text } from 'react-native'
import React from 'react'
import Switch_ from '../../../../components/customs/Switch/index';
import useStyles from './styles';
import { BigButton, HeaderCustom } from '../../../../components';
import { NavigationService } from '../../../../navigation';
import { routes } from '../../../../constants';
const Security: React.FC = () => {
    const styles = useStyles();
    const handlePressGoback = () => {
        NavigationService.navigate(routes.PROFILE);
    };
    return (
        <View style={styles.container}>

            <HeaderCustom leftIcon={{ name: 'arrow-left', type: 'font-awesome-5' }} title='Security'
                onPressLeftIcon={handlePressGoback} />
            <View style={styles.view_switch}>
                <Text style={styles.txt}>Save Password</Text>
                <Switch_ />
            </View>
            <View style={styles.view_switch}>
                <Text style={styles.txt}>Log in with fingerprint</Text>
                <Switch_ />
            </View>
            <View style={styles.view_switch}>
                <Text style={styles.txt}>SMS authenticator</Text>
                <Switch_ />
            </View>
            <View style={styles.view_switch}>
                <Text style={styles.txt}>Google Authenticator</Text>
                <Switch_ />
            </View>
            <View style={styles.viewButton}>
                <BigButton textButton='Change Password' />
            </View>
        </View>
    )
}

export default Security
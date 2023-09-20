import { View, Text } from 'react-native'
import React from 'react'
import useStyles from './styles';
import { BigButton, HeaderCustom } from '../../../../components';
import { NavigationService } from '../../../../navigation';
import { routes } from '../../../../constants';
import Switch_custom from '../../../../components/customs/Switch';
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
                <Switch_custom />
            </View>
            <View style={styles.view_switch}>
                <Text style={styles.txt}>Log in with fingerprint</Text>
                <Switch_custom />
            </View>
            <View style={styles.view_switch}>
                <Text style={styles.txt}>SMS authenticator</Text>
                <Switch_custom />
            </View>
            <View style={styles.view_switch}>
                <Text style={styles.txt}>Google Authenticator</Text>
                <Switch_custom />
            </View>
            <View style={styles.viewButton}>
                <BigButton textButton='Change Password' />
            </View>
        </View>
    )
}

export default Security
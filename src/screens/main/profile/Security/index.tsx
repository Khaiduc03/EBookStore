import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../../../components/customs/Headers';
import styles from '../Security/styles';
import { Switch_ } from '../../../../components/customs/Switch/index';
import { ButtonBig } from '../../../../components/customs/Button/index';
const Security: React.FC = () => {
    return (
        <View>
            <Header leftIcon title='Security' istitle />
            <View style={styles.view_switch}>
                <Switch_ title='Save Password' />
                <Switch_ title='Log in with fingerprint' />
                <Switch_ title='SMS authenticator' />
                <Switch_ title='Google Authenticator' />
            </View>
            <View style={styles.viewButton}>
                <ButtonBig title='Change Password' />

            </View>
        </View>
    )
}

export default Security
import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../../../components/customs/Headers';
import styles from '../Security/styles';
import { Switch_Security1, Switch_Security2, Switch_Security3, Switch_Security4 } from '../../../../components/customs/Switch/index';
import { ButtonBig } from '../../../../components/customs/Button/index';
const Security = () => {
    return (
        <View>
            <Header leftIcon title='Bảo mật' istitle />
            <View style={styles.view_switch}>
                <Switch_Security1 />
                <Switch_Security2 />
                <Switch_Security3 />
                <Switch_Security4 />
            </View>
            <View style={styles.viewButton}>
                <ButtonBig />

            </View>
        </View>
    )
}

export default Security
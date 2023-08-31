import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../../../components/customs/Headers';
import styles from '../Security/styles';
import { Switch_ } from '../../../../components/customs/Switch/index';
import { ButtonBig } from '../../../../components/customs/Button/index';
const Security = () => {
    return (
        <View>
            <Header leftIcon title='Bảo mật' istitle />
            <View style={styles.view_switch}>
                <Switch_ title='Lưu mật khẩu' />
                <Switch_ title='Đăng nhập bằng vân tay' />
                <Switch_ title='Trình xác thực SMS' />
                <Switch_ title='Trình xác thực Google' />
            </View>
            <View style={styles.viewButton}>
                <ButtonBig title='Đổi mật khẩu' />

            </View>
        </View>
    )
}

export default Security
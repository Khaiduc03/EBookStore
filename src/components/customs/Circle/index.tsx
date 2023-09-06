import { View, Text, Image, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import usestyles from '../Circle/styles';
import { Circleprops } from '../Circle/types';
import { images } from '../../../assets/images/png';
import { Icon, normalize } from '@rneui/themed';
import PropTypes from 'prop-types';



const Circle: React.FunctionComponent<Circleprops> = props => {
    const styles = usestyles();
    const { title, icEdit, style, ic_Wallet, circleColor, icContinue, ic_Notification, ic_Security, ic_VIP, ic_HelpCenter, ic_AboutApp, ic_LogOut } = props;
    const circleStyle: ViewStyle = {
        backgroundColor: circleColor || '#000000', // Màu mặc định
        width: 64,
        height: 64,
        borderRadius: normalize(50),
        alignItems: 'center',
        justifyContent: 'center',

    };
    return (
        <View style={style ? style : styles.ViewCircle}>
            <View style={circleStyle}>
                {ic_Wallet && <Icon
                    name={'wallet'}
                    type="ionicon"
                    size={24}
                    color={'#6AF6BD'}
                />}
                {ic_Notification && <Icon
                    name={'bell'}
                    type="font-awesome"
                    size={24}
                    color={'#EC7982'}
                />}
                {ic_Security && <Image source={images.ic_Security} />}
                {ic_VIP && <Image source={images.ic_VIP} />}
                {ic_HelpCenter && <Image source={images.ic_HelpCenter} />}
                {ic_AboutApp && <Icon
                    name={'info'}
                    type="font-awesome"
                    size={24}
                    color={'#F2AC9D'}
                />}
                {ic_LogOut && <Image source={images.ic_Logout} />}
            </View>
            <TouchableOpacity style={styles.ViewCircleText}>
                <Text style={[styles.txtCircle, style]}>{title}</Text>
                <View style={styles.viewIcon}>
                    {icEdit && <View ><Image source={images.ic_Edit2} /></View>}
                    {icContinue && <View><Image source={images.ic_Continue} /></View>}
                </View>

            </TouchableOpacity>

        </View>
    );
};
Circle.propTypes = {
    title: PropTypes.string,
    icEdit: PropTypes.bool,
    style: PropTypes.any, // PropTypes.any cho phép sử dụng bất kỳ kiểu dữ liệu nào cho style
    ic_Wallet: PropTypes.bool,
    circleColor: PropTypes.string,
}
export default Circle;
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import styles from '../Button/styles';
import { ButtonBigpros, ButtonSmallpros, ButtonLongpros } from '../Button/types';
import { images } from '../../../assets';

export const ButtonBig: React.FC<ButtonBigpros> = props => {
    const { title, istitle, } = props;

    return (
        <View style={styles.containerButtonBig}>
            <TouchableOpacity style={styles.ButtonBig} >
                <Text style={styles.txtButtonBig}>{title}</Text>
            </TouchableOpacity>
            {istitle && <Text>{title}</Text>}
        </View>
    )
};
export const ButtonSmall: React.FC<ButtonSmallpros> = props => {
    const { title, istitle, } = props;
    const [isButton, setIsButton] = useState(true);
    const [buttonTextColor, setButtonTextColor] = useState('#f89300');
    const toggleButton = () => {
        setIsButton(!isButton);
        setButtonTextColor(isButton ? '#ffffff' : '#f89300');
    };
    return (
        <View style={styles.viewButtonSmall}>
            <TouchableOpacity
                style={[styles.ButtonSmall,
                { backgroundColor: isButton ? '#ffffff' : '#F89300', borderColor: '#F89300' }]} onPress={toggleButton}>
                <Text style={[styles.txtButtonSmall, { color: buttonTextColor }]}>{title}</Text>
            </TouchableOpacity >
        </View>

    )
};
export const ButtonLong: React.FC<ButtonLongpros> = props => {
    const { icon_Service, title, istitle, icon_Facebook, icon_Website } = props;

    return (
        <View style={styles.container}>
            {icon_Service && <TouchableOpacity style={styles.ButtonService}>
                <Image source={images.ic_Service} />
                <Text style={styles.name}>{title}</Text>
            </TouchableOpacity>}
            {icon_Facebook && <TouchableOpacity style={styles.ButtonMeta}>
                <Image source={images.ic_Facebook} />
                <Text style={styles.name}>{title}</Text>
            </TouchableOpacity>}
            {icon_Website && <TouchableOpacity style={styles.ButtonGoogle}>
                <Image source={images.ic_Website} />
                <Text style={styles.name}>{title}</Text>
            </TouchableOpacity>}
        </View>

    )
};

import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import useStyles from '../Button/styles';
import { ButtonSmallpros, ButtonLongpros } from '../Button/types';
import { images } from '../../../assets';


export const ButtonSmall: React.FC<ButtonSmallpros> = props => {
    const { title } = props
    const [isButtonPressed, setIsButtonPressed] = useState(false);
    const styles = useStyles();
    const toggleButton = () => {
        setIsButtonPressed(!isButtonPressed);
    };

    const buttonBackgroundColor = isButtonPressed ? '#ffffff' : '#F89300';
    const buttonTextColor = isButtonPressed ? '#F89300' : '#ffffff';

    return (
        <View style={styles.viewButtonSmall}>
            <TouchableOpacity
                style={[styles.ButtonSmall, { backgroundColor: buttonBackgroundColor, borderColor: '#F89300' }]}
                onPress={toggleButton}
            >
                <Text style={[styles.txtButtonSmall, { color: buttonTextColor }]}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
};
export const ButtonLong: React.FC<ButtonLongpros> = props => {
    const { icon_Service, title, icon_Facebook, icon_Website } = props;
    const styles = useStyles();

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

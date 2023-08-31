import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import styles from '../Toggleable/styles'
import { ToggleableViewProps } from '../Toggleable/types'
import { images } from '../../../assets/images/png';



export const Toggleable: React.FC<ToggleableViewProps> = ({ title, content }) => {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const toggleContent = () => {
        setIsContentVisible(!isContentVisible);
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.Name}>{title}</Text>
                {isContentVisible && (
                    <>
                        <View style={styles.line}></View>
                        <Text style={styles.content}>{content}</Text>
                    </>
                )}
            </View>
            <TouchableOpacity style={styles.iconContainer} onPress={toggleContent}>
                <Image source={isContentVisible ? images.ic_Up : images.ic_Down} style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}



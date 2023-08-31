import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextFollowProps } from '../Text-Follow/types'
import styles from '../Text-Follow/styles'

export const Text_Follow: React.FC<TextFollowProps> = props => {
    const { istitle, title, number } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.View}>
                <Text style={styles.number}>{number}</Text>
                <Text style={styles.text}>{title}</Text>
                {istitle && <Text>{title}</Text>}
                {istitle && <Text>{number}</Text>}
            </TouchableOpacity>
        </View>
    )
}
export const sdasd: React.FC<TextFollowProps> = props => {
    const { istitle, title, number } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.View}>
                <Text style={styles.number}>{number}</Text>
                <Text style={styles.text}>{title}</Text>
                {istitle && <Text>{title}</Text>}
                {istitle && <Text>{number}</Text>}
            </TouchableOpacity>
        </View>
    )
}
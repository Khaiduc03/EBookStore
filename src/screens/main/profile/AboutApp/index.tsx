import { View, Text } from 'react-native'
import React from 'react'
import usestyles from './styles'
import Header from '../../../../components/customs/Headers';

const AboutApp: React.FC = () => {
    const styles = usestyles();
    return (
        <View style={styles.container}>
            <Header leftIcon istitle title='About The App' />
            <Text>index</Text>
        </View>
    )
}

export default AboutApp
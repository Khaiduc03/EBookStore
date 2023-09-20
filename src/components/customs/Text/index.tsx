import { View, Text } from 'react-native'
import React from 'react'
import { TextCustomProps } from './types'
import useStyles from './styles'

const TextCustom: React.FunctionComponent<TextCustomProps> = props => {
    const { textBold, textLight, title, number, textPrimary } = props;
    const styles = useStyles();
    return (
        <View>
            {textLight && <Text style={styles.Lighttext}>{title}</Text>}
            {textBold && <Text style={styles.Boldtext}>{title}</Text>}
            {textPrimary && <Text style={styles.Primarytext}>{title}</Text>}
            {number && <Text style={styles.Boldtext}>{number}</Text>}

        </View>
    )
}

export default TextCustom
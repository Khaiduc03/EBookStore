import { View, Text } from 'react-native'
import React from 'react'
import { TextCustomProps } from './types'
import useStyles from './styles'

const TextCustom: React.FunctionComponent<TextCustomProps> = props => {
    const { textBold, textLight, title } = props;
    const styles = useStyles();
    return (
        <View>

            {textLight && <Text style={styles.Lighttext}>{title}</Text>}
            {textBold && <Text style={styles.Boldtext}>{title}</Text>}

        </View>
    )
}

export default TextCustom
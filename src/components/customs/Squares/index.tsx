import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { images } from '../../../assets/images/png';
import { SquaresCustomProps } from './types';

const Squares: React.FunctionComponent<SquaresCustomProps> = props => {
    const { avatarDummy, name,  } = props;

    return (
        <View style={styles.Squares}>
            {avatarDummy && <Image style={styles.Avatar} source={images.avata} />}
            {name && <Text>{name}</Text>}
        </View>
    )
}

export default Squares
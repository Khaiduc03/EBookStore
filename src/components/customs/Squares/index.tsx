import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import useStyles from './styles'
import { images } from '../../../assets/images/png';
import { SquaresCustomProps } from './types';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Squares: React.FunctionComponent<SquaresCustomProps> = props => {
    const { avatarDummy, name, title, button, textButton } = props;
    const styles = useStyles();
    const [isFollowing, setIsFollowing] = useState(false);

    const handleButtonPress = () => {
        setIsFollowing(!isFollowing);
    };
    return (
        <TouchableOpacity style={styles.Squares}>
            {avatarDummy && <Image style={styles.Avatar} source={images.avata} />}
            {name && <Text style={styles.name}>{name}</Text>}
            {title && <Text style={styles.title}>{title}</Text>}
            {button && (
                <TouchableOpacity
                    style={[styles.Button, { backgroundColor: isFollowing ? '#888484' : '#0075FF' }]}
                    onPress={handleButtonPress}
                >
                    <Text style={styles.TextButton}>{isFollowing ? 'Unfollow' : textButton}</Text>
                </TouchableOpacity>
            )}
        </TouchableOpacity>
    )
}

export default Squares
import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import useStyles from './styles'
import { images } from '../../../assets/images/png';
import { SquaresCustomProps } from './types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationService } from '../../../navigation';
import { routes } from '../../../constants';

const Squares: React.FunctionComponent<SquaresCustomProps> = props => {
    const { avatarDummy, name, title, button, textButton } = props;
    const styles = useStyles();
    const [isFollowing, setIsFollowing] = useState(false);
    const [isDetail, setIsDetail] = useState();
    const handleButtonPress = () => {
        setIsFollowing(!isFollowing);
    };
    const handlePressUser = () => {
        NavigationService.navigate(routes.PROFILEUSER);
    };
    const handlePressGoback = () => {
        NavigationService.navigate(routes.MYPROFILE);
    };
    return (
        <View style={styles.Squares}>
            {avatarDummy && <TouchableOpacity style={styles.ViewTop} onPress={handlePressUser}><Image style={styles.Avatar} source={images.avata} /></TouchableOpacity>}
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
        </View>
    )
}

export default Squares
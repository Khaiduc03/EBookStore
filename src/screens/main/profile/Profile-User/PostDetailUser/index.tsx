import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon_Comment from '../../MyProfile/PostDetail/Icon-Comment';
import { HeaderCustom } from '../../../../../components';
import { NavigationService } from '../../../../../navigation';
import { routes } from '../../../../../constants';
import TextCustom from '../../../../../components/customs/Text';
import { Icon } from '@rneui/themed';
import useStyles from './styles';
import { images } from '../../../../../assets';

const PostDetailUser: React.FC = (props) => {
    const styles = useStyles();
    const handlePressGoback = () => {
        NavigationService.navigate(routes.PROFILEUSER);
    };

    const [selectedIcon, setSelectedIcon] = useState('');

    const handleIconClick = (iconName: string) => {
        setSelectedIcon(iconName);
    };
    const [isPressed, setIsPressed] = useState(false);
    const [buttonText, setButtonText] = useState('Follow');

    return (
        <View style={styles.container}>

            <HeaderCustom leftIcon={{ name: 'arrow-left', type: 'font-awesome-5' }} title='Post by User'
                onPressLeftIcon={handlePressGoback}
                buttonProps={{
                    onPress: () => {
                        setIsPressed(!isPressed);
                        setButtonText(isPressed ? 'Follow' : 'unFollow');
                    },
                    title: {
                        text: buttonText,
                        size: 16,
                    },
                }}
            />
            <View style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 0.3, borderColor: '#ffffff', borderRadius: 9 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                    <Image style={{ width: 32, height: 32, borderRadius: 99 }} source={images.avata} />
                    <TextCustom textBold title='Drake Kun' />
                </View>
                <TouchableOpacity>
                    <Icon name='ellipsis-vertical' type='ionicon' />
                </TouchableOpacity>
            </View>
            <View>
                <Icon_Comment />
                <View style={styles.Test1}>
                    <Text style={styles.txt}>44 Like</Text>
                    <Text style={styles.txt}>DraKe Kun Phim này đỉnh cao lắm anh em à 😎😎</Text>
                    <Text style={styles.txt}>3 day ago</Text>
                </View>
            </View>


        </View>
    )
}

export default PostDetailUser
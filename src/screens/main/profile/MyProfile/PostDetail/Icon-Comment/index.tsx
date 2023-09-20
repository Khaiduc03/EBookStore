import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import useStyles from '../styles'
import { NavigationService } from '../../../../../../navigation';
import { routes } from '../../../../../../constants';
import { images } from '../../../../../../assets';
import { Icon } from '@rneui/themed';

const Icon_Comment: React.FC = (props) => {
    const styles = useStyles();

    const [selectedIcon, setSelectedIcon] = useState('');
    const [iconType, setIconType] = useState('font-awesome-5');

    const handleIconClick = (iconName: string) => {
        setSelectedIcon(iconName);
        if (selectedIcon !== iconName) {
            setIconType('font-awesome');
        }
    };

    return (
        <View style={{ paddingVertical: 10 }}>
            <Image style={styles.avatarDummy} source={images.avata} />
            <View style={styles.viewIcon}>
                <View style={{ flexDirection: 'row', gap: 15 }}>
                    <TouchableOpacity onPress={() => handleIconClick('heart')}>
                        <Icon name='heart' type={selectedIcon === 'heart' ? 'font-awesome' : 'font-awesome-5'} color={selectedIcon === 'heart' ? 'red' : '#F98300'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleIconClick('comment')}>
                        <Icon name='comment' type={selectedIcon === 'comment' ? 'font-awesome' : 'font-awesome-5'} color={selectedIcon === 'comment' ? 'blue' : '#F98300'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleIconClick('plane')}>
                        <Icon name='paper-plane' type={selectedIcon === 'plane' ? 'font-awesome' : 'font-awesome-5'} color={selectedIcon === 'plane' ? 'green' : '#F98300'} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => handleIconClick('bookmark')}>
                    <Icon name='bookmark' type={selectedIcon === 'bookmark' ? 'font-awesome' : 'font-awesome-5'} color={selectedIcon === 'bookmark' ? 'purple' : '#F98300'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Icon_Comment

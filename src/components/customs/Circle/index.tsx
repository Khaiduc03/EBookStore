import { View, Text } from 'react-native';
import React from 'react';
import usestyles from '../Circle/styles';
import { CustomCirclerProps } from '../Circle/types';
import { Icon, Avatar } from '@rneui/themed';


const Circle: React.FC<CustomCirclerProps> = props => {
    const { colorBackground, title, name, type, rightIcon, color } = props
    const styles = usestyles();
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Avatar
                    size={64}
                    rounded
                    icon={{ name: name, type: type, color: color }}
                    containerStyle={{ backgroundColor: colorBackground }}
                />
                {<Text style={styles.txtCircle}>{title}</Text>}
            </View>
            {rightIcon && <Icon style={styles.rightIcon} name='caret-right' type='font-awesome' />}
        </View>



    );
};

export default Circle;
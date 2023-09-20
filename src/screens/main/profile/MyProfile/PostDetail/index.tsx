import { View, Text, Image } from 'react-native'
import React from 'react'
import { HeaderCustom } from '../../../../../components'
import { images } from '../../../../../assets'
import useStyles from './styles'
import TextCustom from '../../../../../components/customs/Text'
import { Icon } from '@rneui/themed'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ModalWrapContent from '../../../../../components/customs/ModalWrapContent'

const PostDetail: React.FC = () => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <HeaderCustom leftIcon={{ name: 'arrow-left', type: 'font-awesome-5' }} title='POST DETAIL' />
            <View style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',borderWidth:0.5,borderColor:'#ffffff' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                    <Image style={{ width: 32, height: 32, borderRadius: 90 }} source={images.avata} />
                    <TextCustom textBold title='Drake Kun' />
                </View>
                <TouchableOpacity>
                    <Icon name='ellipsis-vertical' type='ionicon' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PostDetail
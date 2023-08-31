import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../MyProfile/styles'
import Header from '../../../../components/customs/Headers';
import { images } from '../../../../assets';
import { Text_Follow } from '../../../../components/customs/Text-Follow/index';



const MyProfile = () => {
    return (
        <View style={styles.container}>
            <Header leftIcon title='My Profile' istitle ic_Add ic_Edit />
            <View style={styles.View}>
                <Image style={styles.Avatar} source={images.avata} />
                <View style={styles.viewFollow}>
                    <Text_Follow title='Follower' number={2012} />
                    <Text_Follow title='Follow' number={100} />
                    <Text_Follow title='Post' number={10} />
                </View>
            </View>
            <View>
                <Text>Drake Kun</Text>

            </View>
        </View>
    )
}

export default MyProfile
import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import useStyles from '../MyProfile/styles'
import Header from '../../../../components/customs/Headers';
import { images } from '../../../../assets';
import TextCustom from '../../../../components/customs/Text';
import { Circle } from '../../../../components';
import Squares from '../../../../components/customs/Squares';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationService } from '../../../../navigation';
import { routes } from '../../../../constants';



const MyProfile: React.FC = () => {
    const styles = useStyles();
    const handlePressGoback = () => {
        NavigationService.navigate(routes.PROFILE);
    };
    return (
        <View style={styles.container}>
            <Header leftIcon onPressLeftIcon={handlePressGoback} title='My Profile' istitle ic_Add ic_Edit />
            <View style={styles.View}>
                {/* <Circle avatarDummy /> */}
                <TouchableOpacity style={styles.viewFollow}>
                    <TextCustom number={100} />
                    <TextCustom textLight title='Follower' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewFollow}>
                    <TextCustom number={100} />
                    <TextCustom textLight title='Follow' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewFollow}>
                    <TextCustom number={100} />
                    <TextCustom textLight title='Post' />
                </TouchableOpacity>
            </View>
            <View style={styles.NameUser}>
                <TextCustom textBold title='Drake Kun' />
                <TextCustom textLight title='Biographic this here !!!!! 😎' />
            </View>
            <View style={styles.ViewExplore}>
                <TextCustom textBold title='Explore everyone' />
                <TouchableOpacity>
                    <TextCustom textPrimary title='See all' />
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator>
                <View style={styles.ViewSquares}>
                    <Squares avatarDummy name='Peter' />
                    <Squares avatarDummy />
                    <Squares avatarDummy />
                    <Squares avatarDummy />
                    <Squares avatarDummy />
                </View>
            </ScrollView>


        </View>
    )
}

export default MyProfile
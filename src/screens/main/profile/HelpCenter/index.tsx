import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../../../components/customs/Headers';
import { TopNavigator } from '../../../../navigation/navigators/TopNavigator';
import useStyles from './styles';

const HelpCenter: React.FC = () => {
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Header leftIcon title='Help center' istitle />
            <View>
                <TopNavigator />
            </View>
        </View>
    )
}

export default HelpCenter
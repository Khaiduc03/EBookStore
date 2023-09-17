import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import usestyles from './styles'
import Header from '../../../../components/customs/Headers';
import { images } from '../../../../assets';
import { Icon } from '@rneui/themed';
import { NavigationService } from '../../../../navigation';
import { routes } from '../../../../constants';
const AboutApp: React.FC = () => {
    const styles = usestyles();
    const handlePressGoback = () => {
        NavigationService.navigate(routes.PROFILE);
    };
    return (
        <View style={styles.container}>
            <Header leftIcon onPressLeftIcon={handlePressGoback} istitle title='About The App' />
            <View style={styles.View}>
                <Text style={styles.Name}>Comic Verse V9.9.9</Text>
            </View>
            <TouchableOpacity style={styles.ViewTiltle}>
                <Text style={styles.Text}>Vacancies</Text>
                <Icon
                    name={'caret-right'}
                    type="font-awesome"
                    size={30}
                    color={styles.colorBlack.color}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ViewTiltle}>
                <Text style={styles.Text}>Fee</Text>
                <Icon
                    name={'caret-right'}
                    type="font-awesome"
                    size={30}
                    color={styles.colorBlack.color}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ViewTiltle}>
                <Text style={styles.Text}>Developers</Text>
                <Icon
                    name={'caret-right'}
                    type="font-awesome"
                    size={30}
                    color={styles.colorBlack.color}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.ViewTiltle}>
                <Text style={styles.Text}>Partner</Text>
                <Icon
                    name={'caret-right'}
                    type="font-awesome"
                    size={30}
                    color={styles.colorBlack.color}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.ViewTiltle}>
                <Text style={styles.Text}>Accessibility</Text>
                <Icon
                    name={'caret-right'}
                    type="font-awesome"
                    size={30}
                    color={styles.colorBlack.color}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.ViewTiltle}>
                <Text style={styles.Text}>Evaluate</Text>
                <Icon
                    name={'caret-right'}
                    type="font-awesome"
                    size={30}
                    color={styles.colorBlack.color}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.ViewTiltle}>
                <Text style={styles.Text}>Reviews about us</Text>
                <Icon
                    name={'caret-right'}
                    type="font-awesome"
                    size={30}
                    color={styles.colorBlack.color}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ViewTiltle}>
                <Text style={styles.Text}>Visit our website</Text>
                <Icon
                    name={'caret-right'}
                    type="font-awesome"
                    size={30}
                    color={styles.colorBlack.color}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ViewTiltle}>
                <Text style={styles.Text}>Follow us on social networks</Text>
                <Icon
                    name={'caret-right'}
                    type="font-awesome"
                    size={30}
                    color={styles.colorBlack.color}
                />
            </TouchableOpacity>


        </View>
    )
}

export default AboutApp
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../Circle/styles';
import { Circlepros } from '../Circle/types';
import { images } from '../../../assets/images/png';


export const Circle_Wallet: React.FC<Circlepros> = props => {
    const { istitle, title, icEdit } = props;
    return (
        <View style={styles.container}>
            <View style={styles.ViewCircle}>
                <View style={styles.Circle_Wallet}>
                    <Image source={images.ic_Wallet} />
                </View>
                <Text style={styles.txtCircle}>{title}</Text>
            </View>
            {istitle && <Text style={styles.txtCircle}>{title}</Text>}
            {icEdit && <Image source={images.ic_Edit2} style={styles.ic_Edit} />}
        </View>

    );
};
export const Circle_Notification: React.FC<Circlepros> = props => {
    const { istitle, title, icContinue } = props;
    return (
        <View style={styles.container}>

            <View style={styles.ViewCircle}>
                <View style={styles.Circle_Notification}>
                    <Image source={images.ic_Notification2} />
                </View>

                <Text style={styles.txtCircle}>{title}</Text>

            </View>
            {istitle && <Text style={styles.txtCircle}>{title}</Text>}
            {icContinue &&
                <Image source={images.ic_Continue} style={styles.ic_Edit} />
            }
        </View>
    );
};
export const Circle_Security: React.FC<Circlepros> = props => {
    const { istitle, title, icContinue } = props;
    return (
        <View style={styles.container}>
            <View style={styles.ViewCircle}>
                <View style={styles.Circle_Security}>
                    <Image source={images.ic_Security} />
                </View>

                <Text style={styles.txtCircle}>{title}</Text>

            </View>
            {istitle && <Text style={styles.txtCircle}>{title}</Text>}
            {icContinue &&
                <Image source={images.ic_Continue} style={styles.ic_Edit} />
            }
        </View>
    );
};
export const Circle_VIP: React.FC<Circlepros> = props => {
    const { istitle, title, icContinue } = props;
    return (
        <View style={styles.container}>
            <View style={styles.ViewCircle}>
                <View style={styles.Circle_VIP}>
                    <Image source={images.ic_VIP} />
                </View>

                <Text style={styles.txtCircle}>{title}</Text>

            </View>
            {istitle && <Text style={styles.txtCircle}>{title}</Text>}
            {icContinue &&
                <Image source={images.ic_Continue} style={styles.ic_Edit} />
            }
        </View>
    );
};
export const Circle_HelpCenter: React.FC<Circlepros> = props => {
    const { istitle, title, icContinue } = props;
    return (
        <View style={styles.container}>
            <View style={styles.ViewCircle}>
                <View style={styles.Circle_HelpCenter}>
                    <Image source={images.ic_HelpCenter} />
                </View>

                <Text style={styles.txtCircle}>{title}</Text>

            </View>
            {istitle && <Text style={styles.txtCircle}>{title}</Text>}
            {icContinue &&
                <Image source={images.ic_Continue} style={styles.ic_Edit} />
            }
        </View>
    );
};
export const Circle_AboutApp: React.FC<Circlepros> = props => {
    const { istitle, title, icContinue } = props;
    return (
        <View style={styles.container}>
            <View style={styles.ViewCircle}>
                <View style={styles.Circle_AboutApp}>
                    <Image source={images.ic_AboutApp} />
                </View>

                <Text style={styles.txtCircle}>{title}</Text>

            </View>
            {istitle && <Text style={styles.txtCircle}>{title}</Text>}
            {icContinue &&
                <Image source={images.ic_Continue} style={styles.ic_Edit} />
            }
        </View>
    );
};
export const Circle_Logout: React.FC<Circlepros> = props => {
    const { istitle, title } = props;
    return (
        <View style={styles.container}>
            <View style={styles.ViewCircle}>
                <View style={styles.Circle_Logout}>
                    <Image source={images.ic_Logout} />
                </View>

                <Text style={styles.txtCircle}>{title}</Text>

            </View>
            {istitle && <Text style={styles.txtCircle}>{title}</Text>}
        </View>
    );
};
export const Circle_Avatar: React.FC<Circlepros> = props => {
    const { istitle, user, email } = props;
    return (
        <View style={styles.View_Avatarcontainer}>
            <View style={styles.view_Avatar}>
                <Image style={styles.Avatar}
                    source={images.avata} />
                <TouchableOpacity style={styles.viewtxt_Avatar} >
                    <Text style={styles.nameUser}>{user}</Text>
                    <Text style={styles.EmailUser}>{email}</Text>
                </TouchableOpacity>

            </View>
            {istitle && <Text>{user}</Text>}
            {istitle && <Text>{email}</Text>}
        </View>
    );
};

import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../Circle/styles';
import { Circlepros } from '../Circle/types';
import { images } from '../../../assets/images/png';


export const Circle_Wallet: React.FC<Circlepros> = props => {
    return (
        <View style={styles.container}>
            <View style={styles.ViewCircle}>
                <View style={styles.Circle_Wallet}>
                    <Image source={images.ic_Wallet} />
                </View>
                <TouchableOpacity>
                    <Text style={styles.txtCircle}>Phương thức thanh toán</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Image source={images.ic_Edit2} style={styles.ic_Edit} />
            </TouchableOpacity>
        </View>

    );
};
export const Circle_Notification: React.FC<Circlepros> = props => {
    return (
        <View style={styles.container}>
    
            <View style={styles.ViewCircle}>
                <View style={styles.Circle_Notification}>
                    <Image source={images.ic_Notification2} />
                </View>
                <TouchableOpacity>
                    <Text style={styles.txtCircle}>Thông báo</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Image source={images.ic_Continue} style={styles.ic_Edit} />
            </TouchableOpacity>
        </View>
    );
};
export const Circle_Security: React.FC<Circlepros> = props => {
    return (
        <View style={styles.container}>
            <View style={styles.ViewCircle}>
                <View style={styles.Circle_Security}>
                    <Image source={images.ic_Security} />
                </View>
                <TouchableOpacity>
                    <Text style={styles.txtCircle}>Bảo mật</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Image source={images.ic_Continue} style={styles.ic_Edit} />
            </TouchableOpacity>
        </View>
    );
};
export const Circle_VIP: React.FC<Circlepros> = props => {
    return (
        <View style={styles.container}>
            <View style={styles.ViewCircle}>
                <View style={styles.Circle_VIP}>
                    <Image source={images.ic_VIP} />
                </View>
                <TouchableOpacity>
                    <Text style={styles.txtCircle}>Trở thành VIP</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Image source={images.ic_Continue} style={styles.ic_Edit} />
            </TouchableOpacity>
        </View>
    );
};
export const Circle_HelpCenter: React.FC<Circlepros> = props => {
    return (
        <View style={styles.container}>
            <View style={styles.ViewCircle}>
                <View style={styles.Circle_HelpCenter}>
                    <Image source={images.ic_HelpCenter} />
                </View>
                <TouchableOpacity>
                    <Text style={styles.txtCircle}>Trung tâm trợ giúp</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Image source={images.ic_Continue} style={styles.ic_Edit} />
            </TouchableOpacity>
        </View>
    );
};
export const Circle_AboutApp: React.FC<Circlepros> = props => {
    return (
        <View style={styles.container}>
            <View style={styles.ViewCircle}>
                <View style={styles.Circle_AboutApp}>
                    <Image source={images.ic_AboutApp} />
                </View>
                <TouchableOpacity>
                    <Text style={styles.txtCircle}>Thông tin về App</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Image source={images.ic_Continue} style={styles.ic_Edit} />
            </TouchableOpacity>
        </View>
    );
};
export const Circle_Logout: React.FC<Circlepros> = props => {
    return (
        <View style={styles.container}>
            <View style={styles.ViewCircle}>
                <View style={styles.Circle_Logout}>
                    <Image source={images.ic_Logout} />
                </View>
                <TouchableOpacity>
                    <Text style={styles.txtCircle}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Image source={images.ic_Continue} style={styles.ic_Edit} />
            </TouchableOpacity>
        </View>
    );
};
export const Circle_Avatar: React.FC<Circlepros> = props => {
    return (
        <View style={styles.View_Avatarcontainer}>
            <View style={styles.view_Avatar}>
                <View style={styles.line}>
                    <Image style={styles.Avatar}
                        source={images.avata} />
                    <TouchableOpacity style={styles.viewtxt_Avatar} >
                        <Text style={styles.nameUser}>Drake Kun</Text>
                        <Text style={styles.EmailUser}>Drake@gmail.com</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
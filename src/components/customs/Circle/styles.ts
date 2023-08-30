import { StyleSheet } from 'react-native';
import { normalize } from '@rneui/themed';


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 36,
        justifyContent: 'space-between'
    },
    ViewCircle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    Circle_Wallet: {
        width: 64,
        height: 64,
        borderRadius: normalize(99),
        backgroundColor: '#D1F1E4',
        alignItems: 'center',
        justifyContent: 'center',

    },
    Viewtxt: {

    },
    ic_Edit: {
        width: 24,
        height: 24,
    },
    txtCircle: {
        marginStart: 30,
        color: '#000000',
        textAlign: 'center',
        fontFamily: 'Urbanist',
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 0.2,
        lineHeight: 21
    },
    Circle_Notification: {
        width: 64,
        height: 64,
        borderRadius: normalize(99),
        backgroundColor: '#FFF2F3',
        alignItems: 'center',
        justifyContent: 'center',


    },
    Circle_Security: {
        width: 64,
        height: 64,
        borderRadius: normalize(99),
        backgroundColor: '#EDF9F1',
        alignItems: 'center',
        justifyContent: 'center',


    },
    Circle_VIP: {
        width: 64,
        height: 64,
        borderRadius: normalize(99),
        backgroundColor: '#FFFDEB',
        alignItems: 'center',
        justifyContent: 'center',


    },
    Circle_HelpCenter: {
        width: 64,
        height: 64,
        borderRadius: normalize(99),
        backgroundColor: '#EDF9F1',
        alignItems: 'center',
        justifyContent: 'center',


    },
    Circle_AboutApp: {
        width: 64,
        height: 64,
        borderRadius: normalize(99),
        backgroundColor: '#FFF7EB',
        alignItems: 'center',
        justifyContent: 'center',


    },
    Circle_Logout: {
        width: 64,
        height: 64,
        borderRadius: normalize(99),
        backgroundColor: '#FFF2F3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameUser: {
        color: '#000000',
        textAlign: 'center',
        fontFamily: 'Urbanist',
        fontSize: 20,
        fontWeight: '900',
        lineHeight: 21,
        letterSpacing: 0.2
    },
    EmailUser: {
        color: '#9a9a9a',
        textAlign: 'center',
        fontFamily: 'Urbanist',
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 21,
        letterSpacing: 0.15,
        marginStart: 33
    },
    Avatar: {
        width: 64,
        height: 64,
        borderRadius: 50,
    },
    view_Avatar: {
        flexDirection: 'row',
        paddingHorizontal: 24
    },
    viewtxt_Avatar: {
        marginStart: 5,

    },
    line: {
        borderBottomWidth: 0.5,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        borderColor: 'gray',
    },
    View_Avatarcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'space-between'
    }

})
export default styles;


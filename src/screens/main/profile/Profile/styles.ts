import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewCircle: {
        paddingHorizontal: 24
    },
    viewWallet: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 36,
        justifyContent: 'space-between'

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
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderColor: 'gray',
    },
    viewLine: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    ic_Edit: {
        width: 24,
        height: 24,
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
    }


});

export default styles;

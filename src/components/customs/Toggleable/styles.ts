import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,


    },
    iconContainer: {
        marginRight: 10,
    },
    contentContainer: {
        flex: 1,
        paddingVertical:10
    },
    icon: {
        width: 24,
        height: 24,
    },
    Name: {
        color: '#000000',
        fontFamily: 'Urbanist',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 21,
        letterSpacing: 0.12,
    },
    content: {
        color: '#000000',
        fontFamily: 'Urbanist',
        fontSize: 15,
        fontWeight: '700',
        lineHeight: 21,
        letterSpacing: 0.12,
        paddingVertical: 10
    },
    line: {
        borderBottomWidth: 0.8,
        width: 300,
        alignItems: 'center',
        borderColor: 'gray',
        paddingVertical: 5
    },
})
export default styles

import { StyleSheet } from 'react-native';
import { normalize } from '@rneui/themed';


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 24,
        flex: 1
    },
    Search: {
        width: 360,
        height: 55,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: "#F2F2F2",
        paddingHorizontal: 20

    },
    view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        width: 250,
        fontSize: 16,
        lineHeight: 24,
        paddingHorizontal: 10,
    },

})
export default styles;

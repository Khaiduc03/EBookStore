import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Avatar: {
        width: 64,
        height: 64,
        borderRadius: 50,
    },
    View: {
        paddingVertical: 24,
        flexDirection: 'row'
    },
    viewFollow: {
        width: '25%',
        right: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    NameUser:{
        paddingHorizontal:24
    },
    ViewExplore:{
        padding:24,
        flexDirection:'row',
        justifyContent:'space-between'

    },
    ViewSquares:{
        paddingHorizontal:24,
        flexDirection:'row',
        gap:20
    }
})
export default styles;
import { StyleSheet } from 'react-native';
import {COLORS, SIZES } from '../../containers/theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondary
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '15%',
    },
    title: {
        fontSize: SIZES.body2,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 15,
        color: COLORS.black,
    },
    containerInput: {
        width: '100%',
        height: '20%',
        alignItems: 'center',
    },
    input: {
        width: '95%',
        height: 45,
        borderColor: COLORS.grey,
        borderWidth: 2,
        marginTop: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardDestaque: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    card: {
        width: '95%',
        height: '90%',
        backgroundColor: COLORS.grey,
        borderRadius: 5,
        position: 'relative',
    }
});

export default styles;
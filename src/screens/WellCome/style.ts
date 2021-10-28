import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: "90%",
  },
  containerTitle: {
    width: '80%',
    marginBottom: 10,
  },
  title: {
      fontSize: SIZES.h2,
      fontWeight: 'bold',
      fontFamily: 'Roboto_700Bold'
  },
  containerText: {
      width: '90%',
      marginBottom: 10,
      alignItems: 'center',
    },
    containerSubtitle: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    subTitle: {
        fontSize: SIZES.body4,
        color: COLORS.textColor,
        fontFamily: 'Roboto_400Regular'
    },
    containerButton: {
        width: '100%',
        alignItems: 'center',
      },
});
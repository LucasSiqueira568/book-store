import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary
  },
  containerImage: {
      width: '100%',
      height: '50%',
    },
    image: {
        width: '100%',
        height: '100%',
        marginTop: 40,
  },
  containerButtons: {
      width: '100%',
      height: '50%',
      alignItems: 'center'
  },
  input: {
      width: '90%',
      height: 50,
      borderWidth: 1,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderColor: COLORS.primary,
      paddingLeft: 10,
      marginTop: 5
  }
});
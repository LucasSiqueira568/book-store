import { StyleSheet } from 'react-native';
import { COLORS, SIZES} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary
  },
  containerImage: {
      width: '100%',
      height: '40%',
      alignItems: 'center',
      marginTop: 10
    },
    title: {
        marginTop: 40,
        fontSize: SIZES.body1
  },
  containerButtons: {
      width: '100%',
      height: '60%',
      alignItems: 'center'
  },
  input: {
      width: '90%',
      height: 60,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: COLORS.primary,
      paddingLeft: 10,
      marginTop: 5
  }
});
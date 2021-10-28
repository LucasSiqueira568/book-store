import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../theme/theme';

export const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: 60,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  text: {
      fontSize: SIZES.body3
  }
});
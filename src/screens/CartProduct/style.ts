import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
      flexDirection: "row",
      marginTop: 40,
      width: "100%",
      backgroundColor: COLORS.primary,
      alignItems: "center",
  },
  title: {
      fontSize: SIZES.body2
  }
});
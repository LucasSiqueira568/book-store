import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  header: {
      flexDirection: "row",
      marginTop: 40,
      width: "100%",
      alignItems: "center",
      justifyContent: "space-around",
  },
  title: {
      fontSize: SIZES.body2,
      flexGrow: 1,
      marginLeft: 80,
  }
});
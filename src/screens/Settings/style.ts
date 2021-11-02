import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../theme/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.secondary
  },
  header: {
      flexDirection: "row",
      marginTop: getStatusBarHeight() + 10,
      justifyContent: 'space-between',
  },
  title: {
      fontSize: SIZES.body2,
      fontWeight: "bold"
  },
  containerSettings: {
      width: '100%',
      height: '100%',
    //   backgroundColor: COLORS.primary,
      paddingTop: 10,
  },
  text: {
      fontSize: SIZES.body3,
      fontFamily: 'Roboto_400Regular',
  },
  containerElementSettings: {
      flexDirection: "row",
  }
});
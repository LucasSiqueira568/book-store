import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { COLORS } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary
  },
  containerSearch: {
    width: '100%',
    alignItems: 'center',
    marginTop: getStatusBarHeight() + 17,
  },
  search: {
      width: '90%',
      height: 50,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: COLORS.grey,
      paddingLeft: 10,
  },
  containerResults: {
      width: '100%',
      height: '100%',
      marginTop: 10,
  }
});
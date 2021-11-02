import { StyleSheet } from 'react-native';
import { COLORS, SIZES} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    borderBottomColor: COLORS.grey,
    borderTopColor: COLORS.grey,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginTop: 10
  },
  firstContainer: {
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconLeft: {
      width: 40,
      height: 40,
  },
  title: {
    marginLeft: 10,
    fontSize: SIZES.body3,
    fontWeight: 'bold',
    color: COLORS.black
  },
  iconRight: {
      width: 40,
      height: 40,
      marginRight: 15,
  }
});
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  containerCard: {
    flex: 1,
    marginTop: 30,
    height: 200,
    width: '100%',
    // backgroundColor: COLORS.primary,
  },
});

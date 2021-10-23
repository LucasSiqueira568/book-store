import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../theme/theme";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 70,
  },
  title: {
    fontSize: SIZES.body1,
    fontFamily: "Roboto_700Bold",
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 15,
    color: COLORS.black,
  },
  containerInput: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  input: {
    width: "95%",
    height: 45,
    borderColor: COLORS.grey,
    borderWidth: 2,
    marginTop: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});

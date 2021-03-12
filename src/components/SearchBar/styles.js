import { StyleSheet } from "react-native";
import { COLORS } from "../../shared";
import { fScale, vScale, hScale } from "../../utils";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    height: "100%",
    paddingStart: hScale(15),
    color: COLORS.white,
    fontSize: fScale(14),
  },
  inputContainer: {
    flexDirection: "row",
    borderRadius: vScale(15),
    height: vScale(40),
    width: "80%",
    alignItems: "center",
    backgroundColor: COLORS.searchBg,
    paddingStart: hScale(10),
  },
  text: {
    color: COLORS.pink,
    marginStart: hScale(10),
    fontWeight: "bold",
  },
});

export default styles;

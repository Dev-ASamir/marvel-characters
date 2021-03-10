import { StyleSheet } from "react-native";
import { COLORS } from "../../shared";
import { fScale, hScale, vScale } from "../../utils";

const styles = StyleSheet.create({
  container: {
    height: vScale(110),
    borderBottomLeftRadius: vScale(20),
    borderBottomRightRadius: vScale(20),
    backgroundColor: COLORS.headerDark,
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: hScale(20),
  },
  text: {
    color: COLORS.white,
    fontSize: fScale(14),
    fontWeight: "bold",
    marginTop: vScale(20),
  },
  image: {
    width: hScale(200),
    height: vScale(70),
    marginTop: vScale(20),
  },
  icon: {
    width: hScale(20),
    height: vScale(20),
    tintColor: COLORS.red,
    marginTop: vScale(20),
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { COLORS } from "../../shared";
import { fScale, hScale, vScale } from "../../utils";

const styles = StyleSheet.create({
  container: {
    width: hScale(350),
    height: vScale(80),
    backgroundColor: COLORS.searchBg,
    borderRadius: vScale(15),
    flexDirection: "row",
    alignItems: "center",
    marginVertical: vScale(8),
  },
  image: {
    width: hScale(100),
    height: vScale(80),
    borderTopLeftRadius: vScale(15),
    borderBottomLeftRadius: vScale(15),
    overflow: "hidden",
  },
  imageLoading: {
    width: hScale(100),
    height: vScale(80),
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    color: COLORS.white,
    fontSize: fScale(18),
    fontWeight: "bold",
    paddingStart: hScale(15),
    width: hScale(200),
  },
});

export default styles;

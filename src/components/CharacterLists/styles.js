import { StyleSheet } from "react-native";
import { COLORS } from "../../shared";
import { fScale, hScale, vScale } from "../../utils";

const styles = StyleSheet.create({
  text: {
    color: COLORS.white,
    fontSize: fScale(14),
    fontWeight: "bold",
    marginTop: vScale(20),
  },
  listContentContainer: {
    paddingBottom: vScale(5),
  },
  footer: {
    height: vScale(100),
    justifyContent: "center",
    alignItems: "center",
  },
  noDataContainer: {
    paddingVertical: vScale(3),
    justifyContent: "center",
    alignItems: "center",
    // flex: 1,
  },
  noDataText: {
    fontSize: fScale(18),
    color: COLORS.white,
  },
});

export default styles;

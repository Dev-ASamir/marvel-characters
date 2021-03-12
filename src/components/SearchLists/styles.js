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
    flex: 1,
    paddingBottom: vScale(5),
  },
  footer: {
    height: vScale(50),
  },
  noDataContainer: {
    paddingVertical: vScale(3),
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    fontSize: fScale(18),
  },
});

export default styles;

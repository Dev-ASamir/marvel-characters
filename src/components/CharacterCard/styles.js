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
  image: {
    width: hScale(200),
    height: vScale(100),
    borderRadius: vScale(20),
    justifyContent: "flex-end",
  },
});

export default styles;

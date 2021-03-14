import { StyleSheet } from "react-native";
import { COLORS } from "../../shared";
import { fScale, hScale, vScale } from "../../utils";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: hScale(10),
  },
  image: {
    width: hScale(100),
    height: vScale(100),
    justifyContent: "flex-end",
    borderRadius: vScale(10),
    overflow: "hidden",
  },
  imageLoading: {
    width: hScale(100),
    height: vScale(100),
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: COLORS.white,
    fontSize: fScale(12),
    textAlign: "center",
    marginTop: vScale(5),
    width: hScale(100),
  },
});

export default styles;

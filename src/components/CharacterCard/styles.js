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
  nameContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    height: vScale(40),
  },
  title: {
    color: COLORS.white,
    fontSize: fScale(12),
    textAlign: "center",
    marginTop: vScale(5),
  },
});

export default styles;

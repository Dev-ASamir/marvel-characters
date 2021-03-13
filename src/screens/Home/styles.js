import { StyleSheet } from "react-native";
import { COLORS } from "../../shared/colors";
import { fScale, vScale, hScale } from "../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: COLORS.dark,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.dark,
  },
  error: {
    fontSize: fScale(18),
    color: COLORS.white,
    width: hScale(300),
    textAlign: "center",
  },
  card: {
    marginVertical: vScale(5),
  },
  image: {
    width: hScale(350),
    height: vScale(100),
    justifyContent: "flex-end",
    borderRadius: vScale(20),
    overflow: "hidden",
  },
  spinner: {
    width: hScale(350),
    height: vScale(100),
    alignSelf: "center",
  },
  imageLoading: {
    backgroundColor: COLORS.white,
    width: hScale(350),
    height: vScale(100),
    justifyContent: "center",
  },
  nameContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    height: vScale(30),
  },
  name: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;

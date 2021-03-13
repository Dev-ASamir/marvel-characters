import { StyleSheet } from "react-native";
import { COLORS } from "../../shared/colors";
import { fScale, vScale, hScale } from "../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  searchContainer: {
    marginTop: vScale(50),
  },
  spinner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    color: COLORS.white,
    fontSize: fScale(18),
    width: hScale(300),
    textAlign: "center",
  },
});

export default styles;

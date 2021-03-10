import { StyleSheet } from "react-native";
import { COLORS } from "../../shared/colors";
import { fScale } from "../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.dark,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    fontSize: fScale(20),
    color: COLORS.white,
  },
});

export default styles;

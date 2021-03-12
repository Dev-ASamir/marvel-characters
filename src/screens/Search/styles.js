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
});

export default styles;

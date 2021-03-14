import { StyleSheet, I18nManager } from "react-native";
import { COLORS } from "../../shared";
import { fScale, hScale, vScale } from "../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: vScale(10),
  },
  image: {
    height: vScale(200),
    width: hScale(375),
    borderBottomLeftRadius: vScale(10),
    borderBottomRightRadius: vScale(10),
    overflow: "hidden",
  },
  imageLoading: {
    height: vScale(200),
    width: hScale(375),
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  back: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: hScale(45),
    top: vScale(40),
    justifyContent: "center",
    alignItems: "center",
    height: vScale(20),
    borderTopRightRadius: vScale(10),
    borderBottomRightRadius: vScale(10),
  },
  header: {
    color: COLORS.pink,
    marginTop: vScale(20),
    marginHorizontal: hScale(10),
    fontWeight: "bold",
  },
  icon: {
    height: vScale(12),
    width: hScale(12),
    tintColor: COLORS.white,
    transform: [{ rotate: I18nManager.isRTL ? "180deg" : "360deg" }],
  },
  content: {
    marginHorizontal: hScale(10),
    marginTop: vScale(10),
  },
  name: {
    color: COLORS.white,
    fontSize: fScale(18),
    fontWeight: "bold",
  },
  desc: {
    marginTop: vScale(10),
    paddingBottom: vScale(5),
    color: COLORS.pink,
    fontWeight: "bold",
  },
  descText: {
    color: COLORS.white,
  },
  noDataText: {
    color: COLORS.white,
    marginHorizontal: hScale(10),
  },
  spinner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;

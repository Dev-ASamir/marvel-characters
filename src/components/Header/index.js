import React from "react";
import {
  Text,
  View,
  ViewPropTypes,
  TouchableOpacity,
  Image,
} from "react-native";
import { ICONS, IMAGES } from "../../shared";
import { Trans } from "../../utils";
import styles from "./styles";
import { applyLanguage } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export const Header = ({
  textStyle,
  containerStyle,
  iconStyle,
  imageStyle,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { lang } = useSelector((state) => ({
    lang: state.lang,
  }));
  let selected_lang = lang === "en" ? "ar" : "en";
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => dispatch(applyLanguage(selected_lang))}
      >
        <Text style={[styles.text, textStyle]}>{Trans("en")}</Text>
      </TouchableOpacity>
      <Image
        style={[styles.image, imageStyle]}
        source={IMAGES.logo}
        resizeMode={"contain"}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Image
          style={[styles.icon, iconStyle]}
          source={ICONS.magnifyingGlass}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    </View>
  );
};

Header.propTypes = {
  textStyle: ViewPropTypes.style,
  imageStyle: ViewPropTypes.style,
  iconStyle: ViewPropTypes.style,
};

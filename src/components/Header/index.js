import propTypes from "prop-types";
import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { ICONS, IMAGES } from "../../shared";
import { Trans } from "../../utils";
import styles from "./styles";
import { applyLanguage } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const Header = ({ textStyle, containerStyle, iconStyle, imageStyle }) => {
  const dispatch = useDispatch();
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
      <Image
        style={[styles.icon, iconStyle]}
        source={ICONS.magnifyingGlass}
        resizeMode={"contain"}
      />
    </View>
  );
};

Header.propTypes = {
  textStyle: propTypes.style,
  imageStyle: propTypes.style,
  iconStyle: propTypes.style,
};

export { Header };

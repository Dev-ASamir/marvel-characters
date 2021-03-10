import propTypes from "prop-types";
import React from "react";
import { View } from "react-native";
import { IMAGES } from "../../shared";
import { Image } from "react-native-elements";

import styles from "./styles";

const CharacterCard = ({
  textStyle,
  containerStyle,
  iconStyle,
  imageStyle,
}) => (
  <Image style={styles.image} source={IMAGES.logo} resizeMode={"contain"}>
    <View>
      <Text>Hello</Text>
    </View>
  </Image>
);

CharacterCard.propTypes = {
  textStyle: propTypes.style,
  imageStyle: propTypes.style,
  iconStyle: propTypes.style,
};

export { CharacterCard };

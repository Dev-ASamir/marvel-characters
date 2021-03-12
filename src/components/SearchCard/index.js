import propTypes from "prop-types";
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { IMAGES } from "../../shared";
import { Image } from "react-native-elements";
import styles from "./styles";

export const SearchCard = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Image
      style={styles.image}
      source={IMAGES.imagePlaceholder}
      resizeMode="stretch"
    />
    <Text style={styles.name}>{item.title}</Text>
  </TouchableOpacity>
);

SearchCard.propTypes = {
  item: propTypes.object,
  onPress: propTypes.func,
};

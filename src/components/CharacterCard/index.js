import propTypes from "prop-types";
import React from "react";
import { View, ViewPropTypes, Text } from "react-native";
import { IMAGES } from "../../shared";
import { Image } from "react-native-elements";
import styles from "./styles";

export const CharacterCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={IMAGES.imagePlaceholder}
        resizeMode="stretch"
      ></Image>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
};

CharacterCard.propTypes = {
  item: propTypes.object,
  onPress: propTypes.func,
};

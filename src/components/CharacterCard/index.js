import propTypes from "prop-types";
import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { IMAGES } from "../../shared";
import { Image } from "react-native-elements";
import styles from "./styles";

export const CharacterCard = ({ item }) => {
  const imagePath =
    item.thumbnail && `${item.thumbnail.path}.${item.thumbnail.extension}`;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={IMAGES.imagePlaceholder}
        source={
          imagePath
            ? {
                uri: imagePath,
              }
            : IMAGES.imagePlaceholder
        }
        resizeMode="stretch"
        PlaceholderContent={
          <View style={styles.imageLoading}>
            <ActivityIndicator />
          </View>
        }
      />
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
};

CharacterCard.propTypes = {
  item: propTypes.object,
};

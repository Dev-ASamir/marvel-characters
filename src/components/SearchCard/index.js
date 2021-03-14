import propTypes from "prop-types";
import React from "react";
import { TouchableOpacity, View, ActivityIndicator, Text } from "react-native";
import { IMAGES } from "../../shared";
import { Image } from "react-native-elements";
import styles from "./styles";

export const SearchCard = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Image
      source={
        item.thumbnail
          ? { uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }
          : IMAGES.imagePlaceholder
      }
      style={styles.image}
      PlaceholderContent={
        <View style={styles.imageLoading}>
          <ActivityIndicator />
        </View>
      }
    />
    <Text style={styles.name}>{item.name}</Text>
  </TouchableOpacity>
);

SearchCard.propTypes = {
  item: propTypes.object,
  onPress: propTypes.func,
};

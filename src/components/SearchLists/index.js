import propTypes from "prop-types";
import React from "react";
import {
  View,
  ViewPropTypes,
  ActivityIndicator,
  Text,
  FlatList,
} from "react-native";
import { IMAGES } from "../../shared";
import { Trans } from "../../utils";
import { Image } from "react-native-elements";
import styles from "./styles";
import { SearchCard } from "../SearchCard";
import { useNavigation } from "@react-navigation/native";

export const SearchLists = ({ data }) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <SearchCard
          item={item}
          // Title={item.Title}
          // imdbID={item.imdbID}
          // Poster={item.Poster}
          // Year={item.Year}
          onPress={() => navigation.navigate("Character", { id: 1 })}
        />
      )}
      ListEmptyComponent={() => (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>{Trans("noResult")}</Text>
        </View>
      )}
      // contentContainerStyle={styles.contentContainer}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

SearchLists.propTypes = {
  data: propTypes.array,
};

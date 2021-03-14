import propTypes from "prop-types";
import React from "react";
import { FlatList } from "react-native";
import { SearchCard } from "../SearchCard";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export const SearchLists = ({ data }) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <SearchCard
          item={item}
          onPress={() => navigation.navigate("Character", { item })}
        />
      )}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

SearchLists.propTypes = {
  data: propTypes.bool,
};

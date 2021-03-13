import propTypes from "prop-types";
import React from "react";
import { FlatList } from "react-native";
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
          onPress={() => navigation.navigate("Character", { item })}
        />
      )}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

SearchLists.propTypes = {
  data: propTypes.array,
};

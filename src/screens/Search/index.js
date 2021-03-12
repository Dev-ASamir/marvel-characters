import React, { useEffect, useCallback, useState } from "react";
import styles from "./styles";
import { getCharacterLits } from "../../services";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, View, ActivityIndicator } from "react-native";
import { IMAGES, COLORS } from "../../shared";
import { SearchBar, SearchLists } from "../../components";
import { dummyData } from "./dummyData";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [requestData, setRequestData] = useState();
  const navigation = useNavigation();

  // To reset the request data before the next search
  useEffect(() => {
    setRequestData([]);
  }, [query]);

  const handleApiRequest = (value) =>
    useCallback(
      value,
      _.debounce(async (value) => {
        setLoading(true);
        const requestData = await getCharacterLits(value);
        setRequestData(requestData);
        setLoading(false);
      }, 1300),
      []
    );

  const onPressSearch = async () => {
    setLoading(true);
    const requestData = await getCharacterLits(query);
    setRequestData(requestData);
    setLoading(false);
  };

  const onChangeText = async (value) => {
    setQuery(value);
    handleApiRequest(value);
  };

  return (
    <ImageBackground source={IMAGES.searchBg} style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar
          onPress={() => onPressSearch()}
          value={query}
          onChangeText={(value) => onChangeText(value)}
        />
      </View>
      {loading ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          color={COLORS.sun}
        />
      ) : (
        <SearchLists
          data={
            dummyData
            // requestData?.movies! && query !== '' ? requestData?.movies! : movies
          }
        />
      )}
    </ImageBackground>
  );
};

export default Search;

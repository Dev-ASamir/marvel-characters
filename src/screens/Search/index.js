import React, { useEffect, useCallback, useState } from "react";
import styles from "./styles";
import { onSearchCharacter } from "../../services";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, View, ActivityIndicator } from "react-native";
import { IMAGES } from "../../shared";
import { SearchBar, SearchLists } from "../../components";
import { dummyData } from "./dummyData";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [requestData, setRequestData] = useState([]);
  const navigation = useNavigation();

  // To reset the request data before the next search
  useEffect(() => {
    setRequestData([]);
  }, [query]);

  const onPressSearch = async () => {
    setLoading(true);
    const requestData = await onSearchCharacter({ query });
    if (requestData.error) {
      setError(requestData.error);
      setLoading(false);
    } else {
      setRequestData(requestData.characters);
      setLoading(false);
    }
  };

  const onChangeText = async (value) => {
    setQuery(value);
    setTimeout(() => {
      onPressSearch();
    }, 1300);
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
        <View style={styles.spinner}>
          <ActivityIndicator size={"large"} />
        </View>
      ) : error ? (
        <View style={styles.spinner}>
          <Text style={styles.error}>{error}</Text>
        </View>
      ) : (
        <SearchLists data={requestData && query !== "" && requestData} />
      )}
    </ImageBackground>
  );
};

export default Search;

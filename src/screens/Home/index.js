import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Text, View, TouchableOpacity } from "react-native";
import { getCharacterLits } from "../../services";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { IMAGES } from "../../shared";
import { useNavigation } from "@react-navigation/native";
import { Header, CharacterLists } from "../../components";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [charactersData, setCharactersData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [limit, setLimit] = useState(1);

  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    onLoad();
  }, []);

  const onLoad = async () => {
    const data = await getCharacterLits({ limit });

    if (data.error) {
      setError(data.error);
      setLoading(false);
    } else {
      setCharactersData(data.characters);
      setLoading(false);
      setError(data.error);
    }
  };
  const loadMore = async () => {
    setRefreshing(true);
    setLimit(limit + 1);
    const moreCharacters = await getCharacterLits({ limit });
    setRefreshing(false);
    await setCharactersData(moreCharacters.characters);
  };

  const _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.push("Character", { item })}
      >
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
        >
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        </Image>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Header />
      {loading ? (
        <View style={styles.content}>
          <ActivityIndicator style={styles.spinner} size={"large"} />
        </View>
      ) : error ? (
        <View style={styles.content}>
          <Text style={styles.error}>{error}</Text>
        </View>
      ) : (
        <CharacterLists
          loading={loading}
          renderItem={_renderItem}
          onMomentumScrollEnd={() => loadMore()}
          characters={charactersData}
          disableLoading={refreshing}
          syncPosts={onLoad}
        />
      )}
    </View>
  );
};

export default Home;

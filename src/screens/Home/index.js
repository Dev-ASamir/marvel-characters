import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Text, View, TouchableOpacity } from "react-native";
import { getCharacterLits } from "../../services";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { Trans } from "../../utils";
import { IMAGES } from "../../shared";
import { useNavigation } from "@react-navigation/native";
import { Header, CharacterCard, CharacterLists } from "../../components";
import { dummyData } from "./dummyData";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [charactersData, setCharactersData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [offset, setOffset] = useState(1);

  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    onLoad();
  }, []);

  const onLoad = async () => {
    const data = await getCharacterLits({ offset });

    if (data.error) {
      setError(data.error);
      setLoading(false);
    } else {
      setCharactersData(data.characters);
      setLoading(false);
    }
  };
  const loadMore = async () => {
    setRefreshing(true);
    const moreCharacters = await getCharacterLits({ offset: offset + 1 });
    setRefreshing(false);
    await setCharactersData(moreCharacters.characters);
  };

  const _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Character", { item })}
      >
        <Image
          source={
            `${item.thumbnail.path}.${item.thumbnail.extension}`
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
        <Text style={styles.error}>{error}</Text>
      ) : (
        <CharacterLists
          containerStyle={styles.contentContainer}
          loading={loading}
          // refreshing={refreshing}
          renderItem={_renderItem}
          onMomentumScrollEnd={() => loadMore()}
          characters={charactersData} //charactersData
          disableLoading={refreshing}
          syncPosts={onLoad}
        />
      )}
    </View>
  );
};

export default Home;

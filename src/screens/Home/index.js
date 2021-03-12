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
  const [count, setCount] = useState(0);

  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    onLoad();
  }, [charactersData]);

  const onLoad = async () => {
    const data = await getCharacterLits({ offset: 0 });
    if (data.error) {
      setError(data.error);
      setLoading(false);
    } else {
      setCharactersData(data.characters);
      setCount(data.characters.length);
      setLoading(false);
    }
  };
  const loadMore = async (offset) => {
    setRefreshing(true);
    const moreCharacters = await getCharacterLits({ offset });
    setRefreshing(false);
    setCount(moreCharacters.characters.length);
    await setCharactersData([...charactersData, ...moreCharacters]);
  };

  const _onRefresh = async () => {
    const data = await getCharacterLits({ offset: 0 });
    setCount(data.characters.length);
    setCharactersData(data);
  };

  const _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Character")}
      >
        <Image
          style={styles.image}
          source={IMAGES.imagePlaceholder}
          resizeMode="stretch"
        >
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{item.title}</Text>
          </View>
        </Image>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {loading ? (
          <ActivityIndicator style={styles.spinner} size={"large"} />
        ) : error ? (
          <Text style={styles.error}>{error}</Text>
        ) : (
          <CharacterLists
            containerStyle={styles.contentContainer}
            loading={loading}
            refreshing={refreshing}
            onRefresh={_onRefresh}
            renderItem={_renderItem}
            onEndReached={() => loadMore(+5)}
            characters={dummyData} //charactersData
            disableLoading={count == charactersData.length}
            syncPosts={onLoad}
          />
        )}
      </View>
    </View>
  );
};

export default Home;

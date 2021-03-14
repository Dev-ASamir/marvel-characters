import React, { useEffect, useState } from "react";
import styles from "./styles";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { reshapeData } from "../../services";
import { FlatList } from "react-native";
import { Trans } from "../../utils";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ICONS, IMAGES } from "../../shared";
import { CharacterCard } from "../../components";
import { Image } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

const Character = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;

  useEffect(() => {
    setLoading(true);
    onLoad();
  }, [item]);

  const onLoad = async () => {
    const data = await reshapeData({ item });
    setCharactersData(data);
    setLoading(false);
  };

  return (
    <>
      <ImageBackground source={IMAGES.searchBg} style={styles.container}>
        {loading ? (
          <View style={styles.spinner}>
            <ActivityIndicator size={"large"} />
          </View>
        ) : (
          <>
            <Image
              source={
                item.thumbnail
                  ? {
                      uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                    }
                  : IMAGES.imagePlaceholder
              }
              style={styles.image}
              PlaceholderContent={
                <View style={styles.imageLoading}>
                  <ActivityIndicator />
                </View>
              }
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}
                style={styles.back}
              >
                <Image source={ICONS.back} style={styles.icon} />
              </TouchableOpacity>
            </Image>
            <View style={styles.content}>
              <Text style={styles.name}>{item.name}</Text>

              {item.description != "" && item.description && (
                <>
                  <Text style={styles.desc}>{Trans("description")}</Text>
                  <Text style={styles.descText}>{item.description}</Text>
                </>
              )}
            </View>
            <ScrollView>
              {charactersData &&
                charactersData.map((i) => (
                  <View key={i.id}>
                    <Text style={styles.header}>{Trans(i.listTitle)}</Text>
                    <FlatList
                      key={i}
                      data={i.list}
                      renderItem={({ item }) => (
                        <CharacterCard item={item} listTitle={i.listTitle} />
                      )}
                      horizontal={true}
                      ListEmptyComponent={() => (
                        <View style={styles.noDataContainer}>
                          <Text style={styles.noDataText}>
                            {Trans("noResult")}
                          </Text>
                        </View>
                      )}
                      contentContainerStyle={styles.contentContainer}
                      keyExtractor={(item) => item.id}
                      showsHorizontalScrollIndicator={false}
                    />
                  </View>
                ))}
            </ScrollView>
          </>
        )}
      </ImageBackground>
    </>
  );
};

export default Character;

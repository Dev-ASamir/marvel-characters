import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { getCharacterLits } from "../../services";
import { FlatList } from "react-native";
import { Trans } from "../../utils";
import { useNavigation } from "@react-navigation/native";
import { dummyData } from "./dummyData";
import { ICONS, IMAGES } from "../../shared";
import { CharacterCard } from "../../components";
import { Image } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

const Character = () => {
  const [charactersData, setCharactersData] = useState({});
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  return (
    <ImageBackground source={IMAGES.searchBg} style={styles.container}>
      <Image source={IMAGES.imagePlaceholder} style={styles.image}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          style={styles.back}
        >
          <Image source={ICONS.back} style={styles.icon} />
        </TouchableOpacity>
      </Image>
      <View style={styles.content}>
        <Text style={styles.name}>Name</Text>
        <Text style={styles.desc}>description</Text>
        <Text style={styles.descText}>description</Text>
      </View>
      <ScrollView>
        {dummyData.map((i) => (
          <View key={i.id}>
            <Text style={styles.header}>{i.listTitle}</Text>
            <FlatList
              key={i}
              data={i.list}
              renderItem={({ item }) => (
                <CharacterCard
                  item={item}
                  listTitle={i.listTitle}
                  // Title={item.Title}
                  // imdbID={item.imdbID}
                  // Poster={item.Poster}
                  // Year={item.Year}
                />
              )}
              horizontal={true}
              ListEmptyComponent={() => (
                <View style={styles.noDataContainer}>
                  <Text style={styles.noDataText}>{Trans("noResult")}</Text>
                </View>
              )}
              contentContainerStyle={styles.contentContainer}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default Character;

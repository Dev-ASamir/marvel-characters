import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Text, View, FlatList } from "react-native";
import { getMoviesLits } from "../../services";
import { ActivityIndicator } from "react-native";
import { Trans } from "../../utils";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components";

const Home = () => {
  const [charactersData, setCharactersData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    onLoad();
  }, [charactersData]);

  const onLoad = async () => {
    const data = await getMoviesLits();
    if (data.error) {
      setError(true);
      setLoading(false);
    } else {
      setCharactersData(data.characters);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {loading ? (
          <ActivityIndicator style={styles.spinner} size={"large"} />
        ) : error ? (
          <Text style={styles.error}>{Trans("globalError")}</Text>
        ) : (
          <Text>Your Data</Text>
        )}
      </View>
    </View>
  );
};

export default Home;

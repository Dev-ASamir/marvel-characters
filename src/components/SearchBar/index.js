import propTypes from "prop-types";
import React from "react";
import { Pressable, View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { COLORS } from "../../shared";
import { Trans, vScale } from "../../utils";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export const SearchBar = ({ onPress, onChangeText, value }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon
          name="magnifying-glass"
          onPress={onPress}
          size={vScale(20)}
          color={COLORS.white}
        />
        <TextInput
          style={styles.input}
          placeholder={Trans("searchPlaceholder")}
          onChangeText={onChangeText}
          placeholderTextColor={COLORS.white}
          value={value}
        />
      </View>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.text}>{Trans("cancel")}</Text>
      </Pressable>
    </View>
  );
};

SearchBar.propTypes = {
  onPress: propTypes.func,
  onChangeText: propTypes.func,
  value: propTypes.string,
};

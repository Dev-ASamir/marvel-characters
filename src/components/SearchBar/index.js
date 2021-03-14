import propTypes from "prop-types";
import React from "react";
import { Pressable, View, Text, Image, TextInput } from "react-native";
import { COLORS, ICONS } from "../../shared";
import { Trans } from "../../utils";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export const SearchBar = ({ onPress, onChangeText, value }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          source={ICONS.magnifyingGlass}
          resizeMode={"contain"}
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

import propTypes from "prop-types";
import React from "react";
import { View, ActivityIndicator, Text, FlatList } from "react-native";
import { COLORS } from "../../shared";
import { Trans } from "../../utils";
import styles from "./styles";

export const CharacterLists = ({
  disableLoading,
  characters,
  renderItem,
  ...props
}) => {
  return (
    <FlatList
      {...props}
      ListEmptyComponent={() => (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>{Trans("noResult")}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContentContainer}
      showsVerticalScrollIndicator={false}
      data={characters}
      renderItem={renderItem}
      ListFooterComponent={() =>
        !disableLoading ? null : (
          <View style={styles.footer}>
            <ActivityIndicator size="small" color={COLORS.white} />
          </View>
        )
      }
      initialNumToRender={5}
      maxToRenderPerBatch={2}
      windowSize={2}
      onEndReachedThreshold={0.5}
    />
  );
};

CharacterLists.propTypes = {
  characters: propTypes.array,
  disableLoading: propTypes.bool,
  renderItem: propTypes.func,
};

import propTypes from "prop-types";
import React from "react";
import {
  View,
  ViewPropTypes,
  ActivityIndicator,
  Text,
  FlatList,
} from "react-native";
import { IMAGES } from "../../shared";
import { Trans } from "../../utils";
import { Image } from "react-native-elements";
import styles from "./styles";

export const CharacterLists = ({
  textStyle,
  containerStyle,
  iconStyle,
  imageStyle,
  onPress,
  disableLoading,
  characters,
  syncPosts,
  disableInitialLoader,
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
        disableLoading ? null : (
          <View style={styles.footer}>
            <ActivityIndicator size="small" />
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
  item: propTypes.object,
  textStyle: ViewPropTypes.style,
  imageStyle: ViewPropTypes.style,
  iconStyle: ViewPropTypes.style,
  onPress: propTypes.func,
  characters: propTypes.array,
  loadMore: propTypes.func,
  disableLoading: propTypes.bool,
  syncPosts: propTypes.func,
  renderItem: propTypes.func,
  containerStyle: ViewPropTypes.style,
};

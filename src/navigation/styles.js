import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import {BackButton} from '../components';
import {FONTS} from '../shared';
import {height, width, calcHeight, calcFont} from '../utils';

const styles = StyleSheet.create({
  headerTitleStyle: {
    ...FONTS.SSTArabic.bold,
    fontSize: calcFont(18),
    textTransform: 'uppercase',
    color: '#FFF',
  },
  headerRightButtonStyle: {
    marginRight: width('6'),
  },
  headerStyle: {
    height: height('11.5'),
  },
  cardStyle: {
    backgroundColor: 'white',
  },
  headerSidesContainerStyle: {
    paddingHorizontal: width('5.3'),
  },
  rightButtonImage: {
    height: height('5'),
    width: width('5'),
  },
  closeIconStyle: {
    marginTop: Platform.OS == 'ios' ? calcHeight(4) : 0,
  },
});

export const common_nav_options = ({navigation}) => {
  return {
    headerTransparent: true,
    headerTintColor: '#FFF',
    headerTitleAlign: 'center',
    headerTitleStyle: styles.headerTitleStyle,
    cardStyle: styles.cardStyle,
    headerStyle: styles.headerStyle,
    headerBackTitleVisible: false,
    headerRightContainerStyle: styles.headerSidesContainerStyle,
    headerLeftContainerStyle: styles.headerSidesContainerStyle,
    ...Platform.select({
      android: {
        headerBackImage: () => (
          <BackButton onBack={() => navigation.goBack()} />
        ),
      },
    }),
  };
};

export default styles;

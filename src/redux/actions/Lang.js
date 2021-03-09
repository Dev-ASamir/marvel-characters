import {APPLY_LANGUAGE} from './types';
import RNRestart from 'react-native-restart';
import {I18nManager} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const applyLanguage = (lang) => async (dispatch) => {
  await dispatch({type: APPLY_LANGUAGE, payload: lang});

  I18nManager.forceRTL(lang == 'ar');
  await AsyncStorage.setItem('LANG', lang).then(() => {
    setTimeout(() => {
      RNRestart.Restart();
    }, 10);
  });
};

import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { common } from "../../config";
import I18n from "../../i18n";
import { IMAGES } from "../../shared";
import styles from "./styles";
import { ImageBackground } from "react-native";

const Splash = () => {
  const navigation = useNavigation();

  const { lang } = useSelector((state) => ({
    lang: state.lang,
  }));

  useEffect(() => {
    startup();
  }, []);

  const startup = async () => {
    const language = lang ? lang : common.defaultLocale;
    I18n.locale = language;

    setTimeout(() => {
      return navigation.reset({
        routes: [
          {
            name: "Home",
          },
        ],
      });
    }, 3000);
  };
  return (
    <ImageBackground
      resizeMode="stretch"
      source={IMAGES.splash}
      style={styles.container}
    />
  );
};

export default Splash;

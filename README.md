# marvel-characters

Marvel App (Demo) for discovering marvel characters, view details for each character .

# IMPORTANT NOTE

I am using API provided by  https://developer.marvel.com

# Main technologies used

- React Native
- JavaScript
- React Navigation (v5)
- RESTful API
- Redux

# Main functionality

- Home Screen user can view available characters and scroll to get more results through pagination .
- Search Screen user can search by the character name and if there are result it will appear or it will view no result message.
- Details Screen user can view details for each character .

# Prerequisites

- React Native CLI to be installed. You can install it by running the command:

npm install -g react-native-cli

- Simulator or emulator to run the app on.

# Installation

First clone the repo using SSH or HTTPS. Here's an example using HTTPS:

git clone https://github.com/a7madsamir/marvel-characters.git

Second run the following command to install project dependencies:

yarn install

in IOS

You will need to make one more step to install pods dependencies, run the following command in the project directory:

- cd ios && pod install

# Run on Device

- run yarn android or yarn ios to run on device or emulator.


# Used dependencies

    "@react-native-community/async-storage": "^1.12.1",
    "@react-native-community/masked-view": "^0.1.10",
    "@react-navigation/native": "^5.9.3",
    "@react-navigation/stack": "^5.14.3",
    "axios": "^0.21.1",
    "i18n-js": "^3.8.0",
    "lodash": "^4.17.21",
    "prop-types": "^15.7.2",
    "react": "16.13.1",
    "react-native": "0.63.2",
    "react-native-elements": "^3.3.0",
    "react-native-gesture-handler": "^1.10.3",
    "react-native-reanimated": "^2.0.0",
    "react-native-restart": "^0.0.22",
    "react-native-safe-area-context": "^3.2.0",
    "react-native-screens": "^2.18.1",
    "react-native-vector-icons": "^8.1.0",
    "react-redux": "^7.2.2",
    "redux": "^4.0.5",
    "redux-logger": "^3.0.6",
    "redux-persist": "^6.0.0",
    "redux-thunk": "^2.3.0"

    Also I am using eslint and prettier for better code formatting

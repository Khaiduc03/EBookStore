module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets/fonts', './src/font'],
  iosAssets: ['./src/font/ios'],
  androidAssets: ['./src/font/android'],
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
  },
};
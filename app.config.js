module.exports = {
  expo: {
    name: "VivaLibro",
    slug: "vivalibro",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "cover",  // Choose either "cover" or "contain"
      backgroundColor: "#f4f1ea"  // Use consistent background color
    },
    platforms: ["ios", "android"],
    assetBundlePatterns: [
      "**/*"
    ],
    updates: {
      fallbackToCacheTimeout: 0
    },
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/icon.png",
        backgroundColor: "#704214"
      },
      usesCleartextTraffic: true  // Combined from plugins
    },
    web: {
      favicon: "./assets/icon.png"
    },
    plugins: [
      [
        "expo-build-properties",
        {
          ios: {
            infoPlist: {
              NSAppTransportSecurity: {
                NSAllowsArbitraryLoads: true
              }
            }
          }
        }
      ],
      [
        "expo-camera",
        {
          cameraPermission: "Allow $(PRODUCT_NAME) to access your camera",
          microphonePermission: "Allow $(PRODUCT_NAME) to access your microphone",
          recordAudioAndroid: true
        }
      ],
      [
        "expo-media-library",
        {
          photosPermission: "Allow $(PRODUCT_NAME) to access your photos.",
          savePhotosPermission: "Allow $(PRODUCT_NAME) to save photos.",
          isAccessMediaLocationEnabled: true
        }
      ]
    ]
  }
};

export default {
    "expo": {
        "name": "fircise",
        "slug": "fircise",
        "version": "1.0.0",
        "orientation": "portrait",
        "icon": "./assets/icon.png",
        "userInterfaceStyle": "light",
        "splash": {
            "image": "./assets/splash.png",
            "resizeMode": "contain",
            "backgroundColor": "#ffffff"
        },
        "assetBundlePatterns": [
            "**/*"
        ],
        "ios": {
            "supportsTablet": true
        },
        "android": {
            "adaptiveIcon": {
                "foregroundImage": "./assets/adaptive-icon.png",
                "backgroundColor": "#ffffff"
            },
            "package": "com.sysmagnus.fircise",
            "config": {
                "googleMaps": {
                    "apiKey": "AIzaSyDcw997w6Shk2BCHZrXXowj1ITFc7S1lnI"
                }
            }
        },
        "web": {
            "favicon": "./assets/favicon.png"
        },
        "extra": {
        }
    }
}

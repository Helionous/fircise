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
            "googleServicesFile": "./google-services.json",
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
            "eas": {
                "projectId": "aa30b37a-c8d0-47a1-9df4-6cdd8d488fb1"
            }
        }
    }
}

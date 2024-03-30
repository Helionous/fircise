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
                    "apiKey": "AIzaSyDuk94MlwK88g1v-rW6QXDbMjJlGBMkB6o"
                }
            }
        },
        "web": {
            "favicon": "./assets/favicon.png"
        },
        "extra": {
            apiKey: process.env.APIKEY,
            authDomain: process.env.AUTHDOMAIN,
            projectId: process.env.PROJECTID,
            storageBucket: process.env.STORAGEBUCKET,
            messagingSenderId: process.env.MESSAGINGSENDERID,
            appId: process.env.APPID
        }
    }
}

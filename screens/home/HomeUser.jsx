import { useCallback, useState } from "react"
import { StyleSheet, View } from "react-native"
import MapView, { Marker } from "react-native-maps"
import { useAlertStore } from "../../store/alert"
import { useFocusEffect } from "@react-navigation/core"
import { useUserStore } from "../../store"

export const HomeUser = ({ navigation }) => {
    const alerts = useAlertStore(state => state.alerts)
    const fetchAlerts = useAlertStore(state => state.fetchAlerts)
    const setSelectedAlert = useAlertStore(state => state.setSelectedAlert)
    const userAuth = useUserStore(state => state.userAuth)

    const [origin, setOrigin] = useState({
        latitude: -13.617373,
        longitude: -72.868008,
    })

    useFocusEffect(useCallback(() => {
        fetchAlerts()
        console.log('auth user:', userAuth)
    }, []))

    navigateToAlertDetail = (alert) => {
        setSelectedAlert(alert)
        navigation.navigate('AlertDetail')
    }

    return (
        <View style={styles.container}>
            <MapView
                initialRegion={{
                    latitude: origin.latitude,
                    longitude: origin.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                style={styles.map} >
                {
                    alerts.map(alert => (
                        <Marker
                            key={alert.id}
                            coordinate={{
                                latitude: parseFloat(alert.latitud),
                                longitude: parseFloat(alert.longitud),
                            }}
                            image={require('../../assets/fire.png')}
                            onPress={() => navigateToAlertDetail(alert)}
                        />
                    ))
                }
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
})

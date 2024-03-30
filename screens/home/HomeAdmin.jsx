import { useState } from "react"
import { StyleSheet, View } from "react-native"
import MapView, { Marker } from "react-native-maps"

export const HomeAdmin = () => {
    const [origin, setOrigin] = useState({
        latitude: -13.617373,
        longitude: -72.868008,
    })

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
                <Marker
                    title="Universidad"
                    description={`Lat: ${origin.latitude} Lng: ${origin.longitude}`}
                    draggable={true}
                    coordinate={origin}
                    onDragEnd={(e) => setOrigin(e.nativeEvent.coordinate)}
                />
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
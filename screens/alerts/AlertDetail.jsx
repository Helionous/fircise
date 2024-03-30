import { Box, Center, Heading, Text } from "native-base"
import { ScrollView, StyleSheet } from "react-native"
import MapView, { Marker } from "react-native-maps"
import { useAlertStore } from "../../store/alert"

export const AlertDetail = () => {
    const selectedAlert = useAlertStore(state => state.selectedAlert)

    return (
        <ScrollView style={{
            marginRight: 10,
            marginLeft: 10,
        }}>
            <Center mt={2} mb={2}>
                <MapView
                    region={{
                        latitude: parseFloat(selectedAlert.latitud),
                        longitude: parseFloat(selectedAlert.longitud),
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    style={styles.map} >
                    <Marker
                        coordinate={{
                            latitude: parseFloat(selectedAlert.latitud),
                            longitude: parseFloat(selectedAlert.longitud),
                        }}
                    />
                </MapView>
            </Center>
            <Text>{selectedAlert.fecha}</Text>
            <Box mt={4}>
                <Heading>{selectedAlert.lugar}</Heading>
                <Text fontSize="lg">{selectedAlert.descripcion}</Text>
            </Box>
            <Box mt={4}>
                <Heading>Magnitud</Heading>
                <Text fontSize="lg">{selectedAlert.magnitud}</Text>
            </Box>
            <Box mt={4}>
                <Heading>Estado</Heading>
                <Text fontSize="lg">{selectedAlert.estado}</Text>
            </Box>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: 200,
    },
})
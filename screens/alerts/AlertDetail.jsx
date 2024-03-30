import { Box, Button, Center, Heading, Text } from "native-base"
import { Alert, ScrollView, StyleSheet } from "react-native"
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { useAlertStore } from "../../store"

export const AlertDetail = () => {
    const selectedAlert = useAlertStore(state => state.selectedAlert)
    const validateAlert = useAlertStore(state => state.validateAlert)
    const setSelectedAlert = useAlertStore(state => state.setSelectedAlert)

    const handleValidateAlert = async () => {
        const status = await validateAlert(selectedAlert.id)
        setSelectedAlert({ ...selectedAlert, published: true })
        Alert.alert(status.message)
    }

    return (
        <ScrollView style={{
            marginRight: 10,
            marginLeft: 10,
        }}>
            <Center mt={2} mb={2}>
                <MapView
                provider={PROVIDER_GOOGLE}
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
            {
                selectedAlert.published === false &&
                <Box mt={2}>
                    <Button onPress={() => handleValidateAlert(selectedAlert)}>Validar</Button>
                </Box>
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: 200,
    },
})
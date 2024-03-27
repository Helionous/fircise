import { Box, Center, Heading, Text } from "native-base"
import { useState } from "react"
import { ScrollView, StyleSheet } from "react-native"
import MapView, { Marker } from "react-native-maps"

export const AlertDetail = () => {
    const [origin, setOrigin] = useState({
        latitude: -13.617373,
        longitude: -72.868008,
    })

    return (
        <ScrollView style={{
            marginRight: 10,
            marginLeft: 10,
        }}>
            <Center mt={2} mb={2}>
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
            </Center>
            <Text>15-03-2024</Text>
            <Box mt={4}>
                <Heading>Reserva Central Abancay</Heading>
                <Text fontSize="lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ipsam, dolores assumenda sunt temporibus culpa quis magni accusantium ea tempore cupiditate iusto doloribus corporis officiis non obcaecati? Suscipit, voluptatibus quod.</Text>
            </Box>
            <Box mt={4}>
                <Heading>Magnitud</Heading>
                <Text fontSize="lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ipsam, dolores assumenda sunt temporibus culpa quis magni accusantium ea tempore cupiditate iusto doloribus corporis officiis non obcaecati? Suscipit, voluptatibus quod.</Text>
            </Box>
            <Box mt={4}>
                <Heading>Magnitud</Heading>
                <Text fontSize="lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ipsam, dolores assumenda sunt temporibus culpa quis magni accusantium ea tempore cupiditate iusto doloribus corporis officiis non obcaecati? Suscipit, voluptatibus quod.</Text>
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
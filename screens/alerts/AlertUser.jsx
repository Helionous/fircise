import { Center, FormControl, HStack, Input, Select } from "native-base"
import { useState } from "react"
import { StyleSheet, View } from "react-native"
import MapView, { Marker } from "react-native-maps"

export const AlertUser = () => {
    const [origin, setOrigin] = useState({
        latitude: -13.617373,
        longitude: -72.868008,
    })

    return (
        <View style={{ margin: 10 }}>
            <FormControl>
                <FormControl.Label>Lugar del Incendio</FormControl.Label>
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
            </FormControl>
            <HStack space={2} mb={2}>
                <FormControl flex={1}>
                    <FormControl.Label>Fecha</FormControl.Label>
                    <Input placeholder="2024/01/01" />
                </FormControl>
                <FormControl flex={1}>
                    <FormControl.Label>Hora</FormControl.Label>
                    <Input placeholder="08:00" />
                </FormControl>
            </HStack>
            <FormControl mb={2}>
                <FormControl.Label>Estado</FormControl.Label>
                <Select>
                    <Select.Item label="Activo" value="Activo" />
                    <Select.Item label="Controlado" value="Controlado" />
                    <Select.Item label="Extinto" value="Extinto" />
                    <Select.Item label="En progreso" value="En progreso" />
                    <Select.Item label="Advertencia" value="Advertencia" />
                    <Select.Item label="Evacuación" value="Evacuación" />
                </Select>
            </FormControl>
            <FormControl>
                <FormControl.Label>Magnitud</FormControl.Label>
                <Input />
            </FormControl>

        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: 200,
    },
})
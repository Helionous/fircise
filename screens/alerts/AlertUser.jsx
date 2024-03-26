import { Center, FormControl, HStack, Input, ScrollView, Select } from "native-base"
import { useState } from "react"
import { StyleSheet } from "react-native"
import MapView, { Marker } from "react-native-maps"
import DateTimePicker from '@react-native-community/datetimepicker'
import { useFormik } from "formik"

export const AlertUser = () => {
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [showTimePicker, setShowTimePicker] = useState(false)
    const [origin, setOrigin] = useState({
        latitude: -13.617373,
        longitude: -72.868008,
    })

    const initialValues = {
        latitud: origin.latitude.toString(),
        longitud: origin.longitude.toString(),
        fecha: date.toLocaleDateString(),
        hora: time.toLocaleTimeString(),
        estado: "",
        magnitud: ""
    }

    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            console.log(values)
        }
    })
    
    const handleOpenDatePicker = () => {
        setShowDatePicker(true)
    }

    const handleSelectDate = (event, selectedDate) => {
        const currentDate = selectedDate || date
        setDate(currentDate)
        setShowDatePicker(false)
    }

    const handleOpenTimePicker = () => {
        setShowTimePicker(true);
    }

    const handleSelectTime = (event, selectedTime) => {
        const currentTime = selectedTime || time
        setTime(currentTime)
        setShowTimePicker(false)
    }

    return (
        <ScrollView style={{ margin: 10 }}>
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
                    <FormControl.Label>Latitud</FormControl.Label>
                    <Input value={origin.latitude.toString()} isReadOnly />
                </FormControl>
                <FormControl flex={1}>
                    <FormControl.Label>Longitud</FormControl.Label>
                    <Input value={origin.longitude.toString()} isReadOnly />
                </FormControl>
            </HStack>
            <HStack space={2} mb={2}>
                <FormControl flex={1}>
                    <FormControl.Label>Fecha</FormControl.Label>
                    <Input value={date.toLocaleDateString()}
                        onFocus={handleOpenDatePicker} placeholder="2024/01/01" />
                    {showDatePicker && (
                        <DateTimePicker
                            value={date}
                            mode="date"
                            onChange={handleSelectDate}
                        />
                    )}
                </FormControl>
                <FormControl flex={1}>
                    <FormControl.Label>Hora</FormControl.Label>
                    <Input
                        value={time.toLocaleTimeString()}
                        onFocus={handleOpenTimePicker}
                        placeholder="08:00" />
                    {showTimePicker && (
                        <DateTimePicker
                            value={time}
                            mode="time"
                            onChange={handleSelectTime}
                        />
                    )}
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

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: 200,
    },
})
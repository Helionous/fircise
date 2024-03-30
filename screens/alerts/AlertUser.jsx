import { Center, FormControl, HStack, Input, ScrollView, Select, TextArea } from "native-base"
import { useEffect, useState } from "react"
import { StyleSheet } from "react-native"
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { useFormik } from "formik"
import { useAlertStore } from "../../store/alert"
import { useFocusEffect } from "@react-navigation/core"
import { useCallback } from "react"

export const AlertUser = () => {
    const [origin, setOrigin] = useState({
        latitude: -13.617373,
        longitude: -72.868008,
    })

    const setAlertForm = useAlertStore(state => state.setAlertForm)
    const date = new Date()

    const initialValues = {
        lugar: "",
        latitud: origin.latitude.toString(),
        longitud: origin.longitude.toString(),
        fecha: date.toLocaleDateString(),
        hora: date.toLocaleTimeString(),
        descripcion: "",
        magnitud: "",
        estado: "",
        published: false,
    }

    const formik = useFormik({ initialValues })

    useFocusEffect(useCallback(() => {
        formik.resetForm({ values: initialValues });
    }, []))

    useEffect(() => {
        setAlertForm(formik.values)
    }, [formik.values])

    return (
        <ScrollView style={{ backgroundColor: 'white', padding: 10 }}>
            <FormControl>
                <FormControl.Label>Lugar del Incendio</FormControl.Label>
                <Input value={formik.values.lugar}
                    onChangeText={formik.handleChange('lugar')}
                />
                <Center mt={2} mb={2}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: origin.latitude,
                            longitude: origin.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        style={styles.map} >
                        <Marker
                            draggable={true}
                            coordinate={origin}
                            onDragEnd={(e) => {
                                setOrigin(e.nativeEvent.coordinate)
                                formik.setFieldValue('latitud', e.nativeEvent.coordinate.latitude.toString())
                                formik.setFieldValue('longitud', e.nativeEvent.coordinate.longitude.toString())
                            }}
                        />
                    </MapView>
                </Center>
            </FormControl>
            <HStack space={2} mb={2}>
                <FormControl flex={1}>
                    <FormControl.Label>Latitud</FormControl.Label>
                    <Input
                        value={origin.latitude.toString()}
                        isReadOnly />
                </FormControl>
                <FormControl flex={1}>
                    <FormControl.Label>Longitud</FormControl.Label>
                    <Input
                        value={origin.longitude.toString()}
                        isReadOnly />
                </FormControl>
            </HStack>
            <FormControl mb={2}>
                <FormControl.Label>Descripción</FormControl.Label>
                <TextArea value={formik.values.descripcion}
                    onChangeText={formik.handleChange('descripcion')} />
            </FormControl>
            <FormControl mb={2}>
                <FormControl.Label>Magnitud</FormControl.Label>
                <TextArea value={formik.values.magnitud}
                    onChangeText={formik.handleChange('magnitud')} />
            </FormControl>
            <FormControl mb={2}>
                <FormControl.Label>Estado</FormControl.Label>
                <Select
                    onValueChange={(value) => {
                        formik.setFieldValue('estado', value)
                    }}
                    selectedValue={formik.values.estado}>
                    <Select.Item label="Activo" value="Activo" />
                    <Select.Item label="Controlado" value="Controlado" />
                    <Select.Item label="Extinto" value="Extinto" />
                    <Select.Item label="En progreso" value="En progreso" />
                    <Select.Item label="Advertencia" value="Advertencia" />
                    <Select.Item label="Evacuación" value="Evacuación" />
                </Select>
            </FormControl>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: 300,
    },
})
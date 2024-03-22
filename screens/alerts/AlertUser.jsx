import { Button, Center, FormControl, HStack, Input, Select } from "native-base"
import { useState } from "react"
import { Text, View } from "react-native"
import DateTimePicker from "@react-native-community/datetimepicker"

export const AlertUser = () => {
    // const [date, setDate] = useState(new Date())
    // const [showDate, setOpen] = useState(false)


    return (
        <View style={{ margin: 10 }}>
            <FormControl>
                <FormControl.Label>Lugar del Incendio</FormControl.Label>
                <Center style={{
                    backgroundColor: '#ececec',
                    paddingTop: 50,
                    paddingBottom: 50,
                }}>
                    <Text>Mapa</Text>
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
import { Center, Heading, Text } from "native-base"
import { View, Image } from "react-native"
import { useEffect } from "react"
import { useState } from "react"

export const AlertSentUser = ({ navigation }) => {
    const [count, setCount] = useState(3)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (count > 1) {
                setCount(count - 1)
            } else {
                navigation.navigate('HomeUser')
            }
        }, 1000)

        return () => clearTimeout(timer)
    }, [count, navigation])

    return (
        <View style={{ marginTop: 100 }}>
            <Center>
                <Text mb={2}>Regresando en {count} segundos</Text>
                <Heading mb={2}>Reporte Enviado</Heading>
                <Image
                    source={require('../../assets/flame-kindling.png')}
                />
                <Text mt={2}>
                    Gracias por alertarnos, nuestro equipo ya va en camino
                </Text>
            </Center>
        </View>
    )
}
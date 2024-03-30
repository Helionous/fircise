import { Center, Heading, ScrollView, Text } from "native-base"
import { Image } from "react-native"
import { useEffect } from "react"
import { useState } from "react"
import { useAlertStore, useUserStore } from "../../store"

export const AlertSentUser = ({ navigation }) => {
    const [count, setCount] = useState(3)
    const alertForm = useAlertStore(state => state.alertForm)
    const createAlert = useAlertStore(state => state.createAlert)
    const userAuth = useUserStore(state => state.userAuth)

    useEffect(() => {
        saveChangesAlert()
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            if (count > 1) {
                setCount(count - 1)
            } else {
                navigation.navigate('HomeUser')
            }
        }, 1000)
        return () => clearTimeout(timer)
    }, [count])

    const saveChangesAlert = () => {
        alertForm.userId = userAuth.userId
        createAlert(alertForm)
        console.log('Alerta enviado:', alertForm)
    }

    return (
        <ScrollView style={{ marginTop: 100 }}>
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
        </ScrollView>
    )
}
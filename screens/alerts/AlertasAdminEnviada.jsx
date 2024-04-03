import { Center, Heading, Image, Text } from "native-base"
import { useEffect, useState } from "react"
import { ScrollView } from "react-native"
import { useUserStore } from "../../store/user"
import { useAlertStore } from "../../store"

export const AlertasAdminEnviada = ({ navigation }) => {
    const [count, setCount] = useState(3)
    const getUsers = useUserStore(state => state.getUsers)
    const selectedAlert = useAlertStore(state => state.selectedAlert)

    const sendPushNotification = async (token) => {
        console.log('notificación enviada: ', token)
        const message = {
            to: token,
            sound: 'default',
            title: 'Alerta de Emergencia',
            body: `${selectedAlert.lugar} - ${selectedAlert.descripcion}`,
            data: { someData: 'goes here' },
        }

        await fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        })
    }

    const handlerNotificar = async () => {
        const users = await getUsers()
        const tokens = users.map(user => user.token)
        console.log("-------------------")
        await Promise.all(tokens.map(token => sendPushNotification(token)))
        navigation.navigate('HomeUser')
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (count > 1) {
                setCount(count - 1)
            } else {
                handlerNotificar()
            }
        }, 1000)
        return () => clearTimeout(timer)
    }, [count])

    return (
        <ScrollView>
            <Center mt={150}>
                <Text mb={10}>Regresando en {count} segundos</Text>
                <Heading mb={10}>Alerta Enviada</Heading>
                <Image width={200} height={200}
                    mb={2}
                    source={require('../../assets/bell-electric.png')} />
                <Text textAlign="center" mb={2}>
                    Pronto se notificara al cuerpo de bomberos mas cernano.
                </Text>
            </Center>
        </ScrollView>
    )
}
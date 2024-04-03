import { Button, Center, Heading, Image, Text } from "native-base"
import { ScrollView } from "react-native"

export const AlertaAdminGenerar = ({ navigation }) => {
    return (
        <ScrollView>
            <Center mt={150}>
                <Heading mb={10}>Generar Alerta</Heading>
                <Image width={200} height={200} 
                mb={2}
                source={require('../../assets/fire_lg.png')} />
                <Text textAlign="center" mb={2}>Se  enviara una alerta a todas
                    las personas que estén cerca del lugar.
                </Text>
                <Button colorScheme="secondary" onPress={() => navigation.navigate("AlertasAdminEnviada")}>Notificar a todos</Button>
            </Center>
        </ScrollView>
    )
}
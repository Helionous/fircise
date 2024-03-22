import { Button, Center, Input, Link, VStack } from "native-base";
import { ScrollView, StyleSheet, Text } from "react-native"

export const RegisterUser = ({ navigation }) => {
    const navigateToHomeTabsGuest = () => {
        navigation.navigate('HomeTabsUser')
    }

    const navigateToLoginUser = () => {
        navigation.navigate('Login')
    }

    return (
        <ScrollView>
            <Center style={styles.header}>
                <Text style={styles.title}>FIRCISE</Text>
                <Text style={styles.subTitle}>Crear Cuenta</Text>
            </Center>
            <VStack space={3} pl={5} pr={5}>
                <Input placeholder="Nombre" />
                <Input placeholder="Correo Electronico" />
                <Input placeholder="Contraseña" />
                <Input placeholder="Confirmar Contraseña" />
                <Button onPress={navigateToHomeTabsGuest}>Crear Cuenta</Button>
                <Center>
                    <Link onPress={navigateToLoginUser}>
                        Si tienes cuenta, Inicia Sessión
                    </Link>
                </Center>
            </VStack>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 140,
        marginBottom: 20,
    },
    title: {
        fontSize: 34,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 24,
        marginBottom: 10,
    },
})
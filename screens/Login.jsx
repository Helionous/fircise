import React from "react"
import { Text, View, StyleSheet } from "react-native"
import { Input, Button, Link, Center, VStack } from "native-base"

export const Login = ({ navigation }) => {
    const navigateToHomeTabsGuest = () => {
        navigation.navigate('HomeTabsGuest')
    }

    const navigateToRegisterUser = () => {
        navigation.navigate('RegisterUser')
    }

    const navigateToHome = () => {
        navigation.navigate('HomeTabsAdmin')
    }

    return (
        <View>
            <Center style={styles.header}>
                <Text style={styles.title}>FIRCISE</Text>
                <Text style={styles.subTitle}>Inicia Sessión</Text>
            </Center>
            <VStack mx={3} space={3}>
                <Input placeholder="Correo Electronico" />
                <Input placeholder="********" />
                <Button onPress={navigateToHome}>Iniciar Sessión</Button>
                <Center>
                    <Link onPress={navigateToRegisterUser}>
                        No tiene cuenta Registrese
                    </Link>
                </Center>
                <Center>
                    <Link onPress={navigateToHomeTabsGuest}>
                        Acceder modo invitado
                    </Link>
                </Center>
            </VStack>
        </View>
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
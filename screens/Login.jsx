import React from "react"

import { Text, View, StyleSheet } from "react-native"
import { Box, Input, Button, Link, Center } from "native-base"

export const Login = ({ navigation }) => {

    const navigateToHomeTabsGuest = () => {
        navigation.navigate('HomeTabsUser')
    }

    return (
        <View>            
            <Center style={styles.header}>
                <Text style={styles.title}>FIRCISE</Text>
                <Text style={styles.subTitle}>Inicia Sessión</Text>
            </Center>
            <Box>
                <Input mx="6" mb="3" placeholder="Correo Electronico" />
                <Input mx="6" mb="3" placeholder="********" />
                <Button mx="6" onPress={navigateToHomeTabsGuest}>Iniciar Sessión</Button>

import { Text, View } from "react-native"
import { Box, Input, Button, Link } from "native-base"

export const Login = () => {
    return (
        <View>
            <View>
                <Text>FIRCISE</Text>
                <Text>Inicia Sessión</Text>
            </View>
            <Box>
                <Input mx="6" mb="3" placeholder="Correo Electronico" />
                <Input mx="6" mb="3" placeholder="********" />
                <Button mx="6" onPress={() => console.log("hello world")}>Click Me</Button>

            </Box>
            <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 10
            }}>
                <Link href="https://nativebase.io">
                    No tiene cuenta Registrese
                </Link>
            </View>
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
});

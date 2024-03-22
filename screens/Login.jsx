import React from "react"
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


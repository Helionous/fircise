import React from "react"
import { Text, View, StyleSheet, Alert } from "react-native"
import { Input, Button, Link, Center, VStack } from "native-base"
import { useFormik } from "formik"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../config/firebase"
import { useUserStore } from "../store/user"

export const Login = ({ navigation }) => {
    const setUserAuth = useUserStore(state => state.setUserAuth)
    const getUserById = useUserStore(state => state.getUserById)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            signInWithEmailAndPassword(auth, values.email, values.password)
                .then(async (userCredential) => {
                    const user = await getUserById(userCredential.user.uid)
                    setUserAuth({
                        userId: user.userId,
                        nombre: user.nombre,
                        email: values.email,
                        rol: user.rol,
                    })
                    if (user.rol === 'admin') {
                        navigateToHome()
                    }
                })
                .catch((error) => {
                    Alert.alert('Login error', error.message)
                })
        },
    })

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
                <Input
                    placeholder="Correo Electronico"
                    onChangeText={formik.handleChange("email")}
                    value={formik.values.email}
                />
                <Input
                    secureTextEntry={true}
                    placeholder="********"
                    onChangeText={formik.handleChange("password")}
                    value={formik.values.password}
                />
                <Button onPress={formik.handleSubmit}>Iniciar Sessión</Button>
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
    );
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
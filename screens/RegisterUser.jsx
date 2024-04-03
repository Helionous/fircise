import { Button, Center, Input, Link, VStack } from "native-base";
import { Alert, ScrollView, StyleSheet, Text } from "react-native"
import { useUserStore } from "../store/user";
import { useFormik } from "formik";

export const RegisterUser = ({ navigation }) => {
    const registerUser = useUserStore(state => state.registerUser)

    const formik = useFormik({
        initialValues: {
            nombre: "",
            correo: "",
            password: ""
        },
        onSubmit: values => {
            registerUser(values.correo, values.password, values.nombre)
                .then((user) => {
                    Alert.alert('Registro exitoso', 'Usuario registrado correctamente')
                })
                .catch(error => {
                    console.log(error)
                })
        }
    })

    const navigateToLoginUser = () => {
        navigation.goBack()
    }

    return (
        <ScrollView>
            <Center style={styles.header}>
                <Text style={styles.title}>FIRCISE</Text>
                <Text style={styles.subTitle}>Crear Cuenta</Text>
            </Center>
            <VStack space={3} pl={5} pr={5}>
                <Input
                    value={formik.values.nombre}
                    onChangeText={formik.handleChange('nombre')}
                    placeholder="Nombre" />
                <Input
                    value={formik.values.correo}
                    onChangeText={formik.handleChange('correo')}
                    placeholder="Correo Electronico" />
                <Input
                    value={formik.values.password}
                    onChangeText={formik.handleChange('password')}
                    secureTextEntry={true}
                    placeholder="Contraseña" />
                {/* <Input placeholder="Confirmar Contraseña" /> */}
                <Button onPress={formik.handleSubmit}>Crear Cuenta</Button>
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
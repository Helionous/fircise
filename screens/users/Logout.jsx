import { signOut } from "firebase/auth"
import { Center, Image, ScrollView, Text } from "native-base"
import { useCallback, useEffect, useState } from "react"
import { useUserStore } from "../../store"
import { useFocusEffect } from "@react-navigation/native"
import { auth } from "../../config/firebase"

export const Logout = ({ navigation }) => {
    const [count, setCount] = useState(3)
    const setDefaultUserAuth = useUserStore(state => state.setDefaultUserAuth)

    const signOutLocal = async () => {
        try {
            await signOut(auth)
            setDefaultUserAuth()
            console.log('User signed out!')
        } catch (error) {
            console.error('Error signing out: ', error)
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (count > 1) {
                setCount(count - 1)
            } else {
                // navigation.navigate('HomeUser')
                signOutLocal()
            }
        }, 1000)
        return () => clearTimeout(timer)
    }, [count])

    // useFocusEffect(useCallback(() => {
    //     signOutLocal()
    // }, []))

    return (
        <ScrollView>
            <Center marginTop={100}>
                <Text mb={2}>Saliendo en {count} segundos</Text>
                <Image
                    source={require('../../assets/kanban.png')}
                />
                <Text mt={2}>
                    Estamos cerrando tu cuenta
                </Text>
            </Center>
        </ScrollView>
    )
}
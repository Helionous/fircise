import { Avatar, Box, Button, Center, HStack, Heading, ScrollView, Text, VStack } from "native-base"
import { Entypo } from "@expo/vector-icons"
import { useAlertStore } from "../../store/alert"
import { useCallback } from "react"
import { useFocusEffect } from "@react-navigation/core"
import { TouchableOpacity } from "react-native"
import { useUserStore } from "../../store/user"

export const ProfileUserReport = ({ navigation }) => {
    const userAlerts = useAlertStore(state => state.userAlerts)
    const getUserAlerts = useAlertStore(state => state.getUserAlerts)
    const userAuth = useUserStore(state => state.userAuth)

    useFocusEffect(useCallback(() => {
        getUserAlerts(userAuth.userId)
        console.log('userAuth', userAuth)
    }, []))

    navigateToAlertDetail = () => {
        navigation.navigate('AlertDetail')
    }

    return (
        <ScrollView>
            <Center>
                <Avatar
                    bg="green.500"
                    size="2xl"
                    mt={50} mb={5}
                    source={{
                        uri: "https://avatars.githubusercontent.com/u/111304665?v=4"
                    }} />
                <Text fontSize="xl" fontWeight="bold">@{userAuth.nombre}</Text>
                <HStack space={3} mt={2} mb={2}>
                    <Button bg="secondary.700" onPress={() => console.log("hello world")}>Mis Reportes</Button>
                    <Button bg="muted.500" onPress={() => navigation.navigate('UserProfileEdit')}>Actualizar</Button>
                </HStack>
            </Center>
            <VStack space={3} ml={5} mr={5}>
                {
                    userAlerts.map(alert => (
                        <TouchableOpacity onPress={navigateToAlertDetail}>
                            <Box rounded="lg"
                                overflow="hidden"
                                borderColor="coolGray.200"
                                backgroundColor="white"
                                borderWidth={1}
                                padding={4}>
                                <HStack space={2}>
                                    <Entypo name="location-pin" size={24} color="black" />
                                    <VStack style={{ flex: 1, justifyContent: 'center' }}>
                                        <Heading>{alert.lugar}</Heading>
                                        <Text>Magnitud: {alert.magnitud}</Text>
                                        <Text>{alert.fecha}</Text>
                                    </VStack>
                                    <Text>{alert.estado}</Text>
                                </HStack>
                            </Box>
                        </TouchableOpacity>
                    ))
                }
            </VStack>
        </ScrollView>
    )
}

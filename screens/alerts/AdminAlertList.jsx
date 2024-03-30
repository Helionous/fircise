import { Box, HStack, Heading, Text, VStack } from "native-base"
import { TouchableOpacity, View } from "react-native"
import { Entypo } from "@expo/vector-icons"
import { useAlertStore } from "../../store"
import { useFocusEffect } from "@react-navigation/native"
import { useCallback } from "react"

export const AdminAlertList = ({ navigation }) => {
    const alerts = useAlertStore(state => state.alerts)
    const fetchAlerts = useAlertStore(state => state.fetchAlerts)
    const setSelectedAlert = useAlertStore(state => state.setSelectedAlert)

    useFocusEffect(useCallback(() => {
        fetchAlerts(true)
    }, []))

    const navigateToAlertDetail = (alert) => {
        setSelectedAlert(alert)
        navigation.navigate('AlertDetail')
    }

    return (
        <View style={{ paddingTop: 10 }}>
            <VStack space={3} ml={5} mr={5}>
                {
                    alerts && alerts.map(alert => (
                        <TouchableOpacity onPress={() => navigateToAlertDetail(alert)}>
                            <Box rounded="lg"
                                overflow="hidden"
                                backgroundColor="white"
                                borderColor="coolGray.200"
                                borderWidth={1}
                                padding={4}                    >
                                <HStack space={2}>
                                    <Entypo name="location-pin" size={24} color="black" />
                                    <VStack style={{ flex: 1, justifyContent: 'center' }}>
                                        <Heading>Ubicación</Heading>
                                        <Text>Magnitud: 3</Text>
                                        <Text>15-03-2024</Text>
                                    </VStack>
                                    <Text>En incendio</Text>
                                </HStack>
                            </Box>
                        </TouchableOpacity>
                    ))
                }
            </VStack>
        </View>
    )
}
import { Box, HStack, Heading, Text, VStack } from "native-base"
import { useAlertStore } from "../../store"
import { useFocusEffect } from "@react-navigation/native"
import { useCallback } from "react"
import { TouchableOpacity, View } from "react-native"
import { Entypo } from "@expo/vector-icons"

export const ValidateAlerts = ({ navigation }) => {
    const alerts = useAlertStore(state => state.alerts)
    const fetchAlerts = useAlertStore(state => state.fetchAlerts)
    const setSelectedAlert = useAlertStore(state => state.setSelectedAlert)

    useFocusEffect(useCallback(() => {
        fetchAlerts(false)
    }, []))

    const navigateToAlertDetail = async (alert) => {
        setSelectedAlert(alert)
        navigation.navigate('AlertDetail')
    }

    return (
        <View style={{ paddingTop: 10 }}>
            <VStack space={3} ml={5} mr={5}>
                {
                    alerts && alerts.map(alert => (
                        <TouchableOpacity key={alert.id} onPress={() => navigateToAlertDetail(alert)}>
                            <Box rounded="lg"
                                overflow="hidden"
                                backgroundColor="white"
                                borderColor="coolGray.200"
                                borderWidth={1}
                                padding={4}                    >
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
        </View>
    )
}
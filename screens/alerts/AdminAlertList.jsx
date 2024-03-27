import { Box, HStack, Heading, Text, VStack } from "native-base"
import { TouchableOpacity, View } from "react-native"
import { Entypo } from "@expo/vector-icons"

export const AdminAlertList = ({ navigation }) => {
    const navigateToAlertDetail = () => {
        navigation.navigate('AlertDetail')
    }

    return (
        <View style={{ paddingTop: 10 }}>
            <VStack space={3} ml={5} mr={5}>
                <TouchableOpacity onPress={navigateToAlertDetail}>
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
                <Box rounded="lg"
                    overflow="hidden"
                    backgroundColor="white"
                    borderColor="coolGray.200"
                    borderWidth={1}
                    padding={4}>
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
                <Box rounded="lg"
                    overflow="hidden"
                    backgroundColor="white"
                    borderColor="coolGray.200"
                    borderWidth={1}
                    padding={4}>
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
                <Box rounded="lg"
                    overflow="hidden"
                    backgroundColor="white"
                    borderColor="coolGray.200"
                    borderWidth={1}
                    padding={4}>
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
            </VStack>
        </View>
    )
}
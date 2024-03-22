import { Avatar, Box, Button, Center, HStack, Heading, ScrollView, Text, VStack } from "native-base"
import { Entypo } from "@expo/vector-icons"

export const ProfileUserReport = ({ navigation }) => {
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
                <Text fontSize="xl" fontWeight="bold">@Henry</Text>
                <HStack space={3} mt={2} mb={2}>
                    <Button bg="secondary.700" onPress={() => console.log("hello world")}>Mis Reportes</Button>
                    <Button bg="muted.500" onPress={() => navigation.navigate('UserProfileEdit')}>Actualizar</Button>
                </HStack>
            </Center>
            <VStack space={3} ml={5} mr={5}>
                <Box rounded="lg"
                    overflow="hidden"
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
        </ScrollView>
    )
}

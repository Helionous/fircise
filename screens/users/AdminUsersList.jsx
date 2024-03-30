import { Avatar, Box, HStack, Heading, ScrollView, Text, VStack } from "native-base"
import { TouchableOpacity } from "react-native"

export const AdminUsersList = ({ navigation }) => {
    const navigateToAdminUsersUpdate = () => {
        navigation.navigate('AdminUsersUpdate')
    }

    return (
        <ScrollView style={{ paddingTop: 10 }}>
            <VStack space={3} ml={5} mr={5}>
                <TouchableOpacity onPress={navigateToAdminUsersUpdate}>
                    <Box rounded="lg"
                        overflow="hidden"
                        backgroundColor="white"
                        borderColor="coolGray.200"
                        borderWidth={1}
                        padding={4}                    >
                        <HStack space={2}>
                            <Avatar bg="green.500" source={{
                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }} />
                            <VStack style={{ flex: 1, justifyContent: 'center' }}>
                                <Heading>Ubicación</Heading>
                                <Text>Magnitud: 3</Text>
                                <Text>15-03-2024</Text>
                            </VStack>
                            <Text>Ver</Text>
                        </HStack>
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Box rounded="lg"
                        overflow="hidden"
                        backgroundColor="white"
                        borderColor="coolGray.200"
                        borderWidth={1}
                        padding={4}                    >
                        <HStack space={2}>
                            <Avatar bg="green.500" source={{
                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }} />
                            <VStack style={{ flex: 1, justifyContent: 'center' }}>
                                <Heading>Ubicación</Heading>
                                <Text>Magnitud: 3</Text>
                                <Text>15-03-2024</Text>
                            </VStack>
                            <Text>Ver</Text>
                        </HStack>
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Box rounded="lg"
                        overflow="hidden"
                        backgroundColor="white"
                        borderColor="coolGray.200"
                        borderWidth={1}
                        padding={4}                    >
                        <HStack space={2}>
                            <Avatar bg="green.500" source={{
                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }} />
                            <VStack style={{ flex: 1, justifyContent: 'center' }}>
                                <Heading>Ubicación</Heading>
                                <Text>Magnitud: 3</Text>
                                <Text>15-03-2024</Text>
                            </VStack>
                            <Text>Ver</Text>
                        </HStack>
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Box rounded="lg"
                        overflow="hidden"
                        backgroundColor="white"
                        borderColor="coolGray.200"
                        borderWidth={1}
                        padding={4}                    >
                        <HStack space={2}>
                            <Avatar bg="green.500" source={{
                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }} />
                            <VStack style={{ flex: 1, justifyContent: 'center' }}>
                                <Heading>Ubicación</Heading>
                                <Text>Magnitud: 3</Text>
                                <Text>15-03-2024</Text>
                            </VStack>
                            <Text>Ver</Text>
                        </HStack>
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Box rounded="lg"
                        overflow="hidden"
                        backgroundColor="white"
                        borderColor="coolGray.200"
                        borderWidth={1}
                        padding={4}                    >
                        <HStack space={2}>
                            <Avatar bg="green.500" source={{
                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }} />
                            <VStack style={{ flex: 1, justifyContent: 'center' }}>
                                <Heading>Ubicación</Heading>
                                <Text>Magnitud: 3</Text>
                                <Text>15-03-2024</Text>
                            </VStack>
                            <Text>Ver</Text>
                        </HStack>
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Box rounded="lg"
                        overflow="hidden"
                        backgroundColor="white"
                        borderColor="coolGray.200"
                        borderWidth={1}
                        padding={4}                    >
                        <HStack space={2}>
                            <Avatar bg="green.500" source={{
                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }} />
                            <VStack style={{ flex: 1, justifyContent: 'center' }}>
                                <Heading>Ubicación</Heading>
                                <Text>Magnitud: 3</Text>
                                <Text>15-03-2024</Text>
                            </VStack>
                            <Text>Ver</Text>
                        </HStack>
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Box rounded="lg"
                        overflow="hidden"
                        backgroundColor="white"
                        borderColor="coolGray.200"
                        borderWidth={1}
                        padding={4}                    >
                        <HStack space={2}>
                            <Avatar bg="green.500" source={{
                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }} />
                            <VStack style={{ flex: 1, justifyContent: 'center' }}>
                                <Heading>Ubicación</Heading>
                                <Text>Magnitud: 3</Text>
                                <Text>15-03-2024</Text>
                            </VStack>
                            <Text>Ver</Text>
                        </HStack>
                    </Box>
                </TouchableOpacity>
            </VStack>
        </ScrollView>
    )
}
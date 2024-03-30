import { Avatar, Box, HStack, Heading, ScrollView, Text, VStack } from "native-base"
import { TouchableOpacity } from "react-native"
import { useUserStore } from "../../store"
import { useFocusEffect } from "@react-navigation/native"
import { useCallback } from "react"

export const AdminUsersList = ({ navigation }) => {
    const users = useUserStore(state => state.users)
    const getUsers = useUserStore(state => state.getUsers)
    const setSelectedUser = useUserStore(state => state.setSelectedUser)

    useFocusEffect(useCallback(() => {
        getUsers()
    }, []))

    const navigateToAdminUsersUpdate = (user) => {
        setSelectedUser(user)
        navigation.navigate('AdminUsersUpdate')
    }

    return (
        <ScrollView style={{ paddingTop: 10 }}>
            <VStack space={3} ml={5} mr={5}>
                {
                    users && users.map(user => (
                        <TouchableOpacity key={user.id} onPress={() => navigateToAdminUsersUpdate(user)}>
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
                                        <Heading>{user.nombre}</Heading>
                                    </VStack>
                                    <Text>Ver</Text>
                                </HStack>
                            </Box>
                        </TouchableOpacity>
                    ))
                }
            </VStack>
        </ScrollView>
    )
}
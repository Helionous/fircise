import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AdminAlertList, ValidateAlerts } from "../screens/alerts"
import { AdminUsersList } from "../screens/users"
import { HomeUser } from "../screens/home"
import { Pressable, Text } from "react-native"
import { Avatar, HStack, IconButton } from "native-base"
import { Feather } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { signOut } from "firebase/auth"
import { auth } from "../config/firebase"
import { useUserStore } from "../store"

const Tab = createBottomTabNavigator()

export const HomeTabsAdmin = ({ navigation }) => {
    const userAuth = useUserStore(state => state.userAuth)

    const signOutLocal = async () => {
        try {
            await signOut(auth)
            console.log('User signed out!')
        } catch (error) {
            console.error('Error signing out: ', error)
        }
    }

    const navigateToProfileUser = () => {
        navigation.navigate('ProfileUserReport')
    }

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="HomeUser"
                component={HomeUser}
                options={{
                    title: '',
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                    ),
                    headerLeft: () => (
                        <Text>Bienvenido admin, {userAuth.nombre}!</Text>
                    ),
                    headerRight: () => (
                        <HStack mr={4}>
                            <IconButton
                                variant="ghost"
                                _icon={{
                                    as: Feather,
                                    name: "bell",
                                }} mr={2} />
                            <Pressable onPress={navigateToProfileUser}>
                                <Avatar
                                    bg="green.500"
                                    source={{
                                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    }} />
                            </Pressable>
                        </HStack>
                    ),
                }}
            />
            <Tab.Screen
                name="AdminAlertList"
                component={AdminAlertList}
                options={{
                    title: 'Alertas',
                    tabBarLabel: 'Alertas',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="alert-circle" size={size} color={color} />
                    ),
                    headerLeft: () => (
                        <IconButton
                            variant="ghost"
                            _icon={{
                                as: Ionicons,
                                name: "arrow-back",
                            }} ml={2} />
                    )
                }} />
            <Tab.Screen
                name="AdminUsersList"
                component={AdminUsersList}
                options={{
                    title: 'Usuarios',
                    tabBarLabel: 'Usuarios',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" size={size} color={color} />
                    ),
                    headerRight: () => (
                        <IconButton
                            onPress={signOutLocal}
                            variant="ghost"
                            _icon={{
                                as: Feather,
                                name: "log-out",
                            }} mr={2} />
                    )
                }} />
            <Tab.Screen
                name="ValidateAlerts"
                component={ValidateAlerts}
                options={{
                    title: 'Validar Alertas',
                    tabBarLabel: 'Validar',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="check-square" size={size} color={color} />
                    )
                }} />
        </Tab.Navigator>
    )
}
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { HomeUser } from "../screens/home"
import { AlertUser } from "../screens/alerts"
import { ProfileUserReport } from "../screens/users"
import { Avatar, HStack, IconButton, Text } from "native-base"
import { auth } from "../config/firebase"
import { signOut } from "firebase/auth"
import { useUserStore } from "../store"
import { View } from "react-native"

const Tab = createBottomTabNavigator()

export const HomeTabsUser = ({ navigation }) => {
    const userAuth = useUserStore(state => state.userAuth)
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

    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: {
                paddingBottom: 10,
                fontWeight: 'bold',
                fontSize: 16,
            },
            tabBarStyle: {
                padding: 10,
                height: 80,
            }
        }}>
            <Tab.Screen
                name="HomeUser"
                component={HomeUser}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={{
                            backgroundColor: focused ? 'tomato' : 'transparent',
                            borderRadius: 5,
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 5,
                            paddingBottom: 5
                        }}>
                            <Feather name="home" size={size} color={focused ? 'white' : color} />
                        </View>
                    ),
                    headerLeft: () => (
                        <Text ml={2}>Bienvenido admin, {userAuth.nombre}!</Text>
                    ),
                    headerRight: () => (
                        <HStack mr={4}>
                            <IconButton
                                variant="ghost"
                                _icon={{
                                    as: Feather,
                                    name: "bell",
                                }} mr={2} />
                            <Avatar bg="green.500" source={{
                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }} />
                        </HStack>
                    ),
                    title: ''
                }} />
            < Tab.Screen
                name="AlertUser"
                component={AlertUser}
                options={{
                    title: 'Alertar',
                    tabBarLabel: 'Alertas',
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={{
                            backgroundColor: focused ? 'tomato' : 'transparent',
                            borderRadius: 5,
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 5,
                            paddingBottom: 5
                        }}>
                            <Feather name="alert-circle" size={size} color={focused ? 'white' : color} />
                        </View>
                    ),
                    headerLeft: () => (
                        <IconButton
                            variant="ghost"
                            _icon={{
                                as: Ionicons,
                                name: "arrow-back",
                            }} ml={2} />
                    ),
                    headerRight: () => (
                        <IconButton
                            onPress={() => navigation.navigate('AlertSentUser')}
                            variant="ghost"
                            _icon={{
                                as: Ionicons,
                                name: "save",
                            }} mr={2} />
                    )
                }} />
            < Tab.Screen
                name="ProfileUserReport"
                component={ProfileUserReport}
                options={{
                    title: 'Perfil',
                    tabBarLabel: 'Mi Perfil',
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={{
                            backgroundColor: focused ? 'tomato' : 'transparent',
                            borderRadius: 5,
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 5,
                            paddingBottom: 5
                        }}>
                            <Feather name="user" size={size} color={focused ? 'white' : color} />
                        </View>
                    ),
                    headerLeft: () => (
                        <IconButton
                            variant="ghost"
                            _icon={{
                                as: Ionicons,
                                name: "arrow-back",
                            }} ml={2} />
                    ),
                    headerRight: () => (
                        <IconButton
                            onPress={() => navigation.navigate('Logout')}
                            variant="ghost"
                            _icon={{
                                as: Feather,
                                name: "log-out",
                            }} mr={2} />
                    )
                }} />
        </Tab.Navigator >
    )
}
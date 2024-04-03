import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AdminAlertList, ValidateAlerts } from "../screens/alerts"
import { AdminUsersList } from "../screens/users"
import { HomeUser } from "../screens/home"
import { Pressable, Text, View } from "react-native"
import { Avatar, HStack, IconButton } from "native-base"
import { Feather } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { signOut } from "firebase/auth"
import { auth } from "../config/firebase"
import { useUserStore } from "../store"

const Tab = createBottomTabNavigator()

export const HomeTabsAdmin = ({ navigation }) => {
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

    const navigateToProfileUser = () => {
        navigation.navigate('ProfileUserReport')
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
                    title: '',
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
                        <Text>Bienvenido, {userAuth.nombre}!</Text>
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
                    )
                }} />
            <Tab.Screen
                name="AdminUsersList"
                component={AdminUsersList}
                options={{
                    title: 'Usuarios',
                    tabBarLabel: 'Usuarios',
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
            <Tab.Screen
                name="ValidateAlerts"
                component={ValidateAlerts}
                options={{
                    title: 'Validar Alertas',
                    tabBarLabel: 'Validar',
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={{
                            backgroundColor: focused ? 'tomato' : 'transparent',
                            borderRadius: 5,
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingTop: 5,
                            paddingBottom: 5
                        }}>
                            <Feather name="check-square" size={size} color={focused ? 'white' : color} />
                        </View>
                    )
                }} />
        </Tab.Navigator>
    )
}
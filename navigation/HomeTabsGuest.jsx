import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather } from '@expo/vector-icons'
import { HomeGuest } from "../screens/home"
import { AlertDetail } from "../screens/alerts"
import { Button, Link } from "native-base"

const Tab = createBottomTabNavigator()

export const HomeTabsGuest = ({ navigation }) => {
    const navigateToRegisterUser = () => {
        navigation.navigate('RegisterUser')
    }

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="HomeGuestScreen"
                component={HomeGuest}
                options={{
                    title: '',
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                    ),
                    headerRight: () => (
                        <Button
                            onPress={() => navigation.navigate('Login')}
                            mr={5}>Iniciar Sessión</Button>
                    ),
                    headerLeft: () => (
                        <Link ml={5} onPress={navigateToRegisterUser}>
                            CREAR CUENTA
                        </Link>
                    ),
                }} />
            <Tab.Screen
                name="AlertDetail"
                component={AlertDetail}
                options={{
                    tabBarLabel: 'Detalles',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" size={size} color={color} />
                    ),
                    title: 'Detalles'
                }} />
        </Tab.Navigator>
    )
}
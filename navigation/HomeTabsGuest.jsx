import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather } from '@expo/vector-icons'
import { HomeUser } from "../screens/home"
import { AlertDetail } from "../screens/alerts"
import { Button, Link } from "native-base"
import { Login } from "../screens/Login"

const Tab = createBottomTabNavigator()

export const HomeTabsGuest = ({ navigation }) => {
    const navigateToRegisterUser = () => {
        navigation.navigate('RegisterUser')
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
        </Tab.Navigator>
    )
}
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather } from '@expo/vector-icons'
import { HomeUser } from "../screens/home"
import { Button, Link, View } from "native-base"

const Tab = createBottomTabNavigator()

export const HomeTabsGuest = ({ navigation }) => {
    const navigateToRegisterUser = () => {
        navigation.navigate('RegisterUser')
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
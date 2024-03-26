import { createStackNavigator } from "@react-navigation/stack"
import { createContext, useContext, useEffect, useState } from "react"
import { ActivityIndicator, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { onAuthStateChanged } from "firebase/auth"
import { HomeTabsAdmin } from "./HomeTabsAdmin"
import { HomeTabsUser } from "./HomeTabsUser"
import { HomeTabsGuest } from "./HomeTabsGuest"
import { AlertDetail, AlertSentUser } from "../screens/alerts"
import { Login } from "../screens/Login"
import { UserProfileEdit } from "../screens/users/UserProfileEdit"
import { RegisterUser } from "../screens/RegisterUser"
import { AdminUsersUpdate, ProfileUserReport } from "../screens/users"
import { auth } from "../config/firebase"

const Stack = createStackNavigator()
const AuthenticatedUserContext = createContext({})

export const AuthenticatedUserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    return (
        <AuthenticatedUserContext.Provider value={{ user, setUser }}>
            {children}
        </AuthenticatedUserContext.Provider>
    )
}

function GuestStack() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} options={{ title: '', headerTransparent: true }} />
            <Stack.Screen name="RegisterUser" component={RegisterUser} />
            <Stack.Screen name="HomeTabsGuest" component={HomeTabsGuest} />
        </Stack.Navigator>
    )
}

function AdminStack() {
    return (
        <Stack.Navigator initialRouteName="HomeTabsUser" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeTabsAdmin" component={HomeTabsAdmin} />
            <Stack.Screen name="HomeTabsUser" component={HomeTabsUser} />            
            <Stack.Screen name="AdminUsersUpdate" component={AdminUsersUpdate} />
            <Stack.Screen name="AlertSentUser" component={AlertSentUser} />
            <Stack.Screen
                name="ProfileUserReport"
                component={ProfileUserReport}
                options={{
                    title: 'Perfil',
                    headerShown: true,
                    headerTransparent: false
                }} />
            <Stack.Screen
                name="UserProfileEdit"
                component={UserProfileEdit}
                options={{
                    title: 'Perfil',
                    headerShown: true,
                    headerTransparent: false
                }} />
            <Stack.Screen
                name="AlertDetail"
                component={AlertDetail}
                options={{
                    title: 'Detalles',
                    headerShown: true,
                    headerTransparent: false
                }} />
        </Stack.Navigator>
    )
}

export const Navigation = () => {
    const { user, setUser } = useContext(AuthenticatedUserContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(
            auth,
            async authenticatedUser => {
                authenticatedUser ? setUser(authenticatedUser) : setUser(null)
                setIsLoading(false)
            }
        )
        return unsubscribeAuth
    }, [user])

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' />
            </View>
        )
    }

    return (
        <NavigationContainer>
            {user ? <AdminStack /> : <GuestStack />}
        </NavigationContainer>
    )
}
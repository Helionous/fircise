import { createStackNavigator } from "@react-navigation/stack"
import { useContext, useEffect, useState } from "react"
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
import { useUserStore } from "../store/user"
import { AuthenticatedUserContext } from "../context"

const Stack = createStackNavigator()

function GuestStack() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} options={{ title: '', headerTransparent: true }} />
            <Stack.Screen name="RegisterUser" component={RegisterUser} />
            <Stack.Screen name="HomeTabsGuest" component={HomeTabsGuest} />
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

function AdminStack({ route }) {
    return (
        <Stack.Navigator
            initialRouteName={route}
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="HomeTabsAdmin"
                component={HomeTabsAdmin} />
            <Stack.Screen
                name="HomeTabsUser"
                component={HomeTabsUser} />
            <Stack.Screen
                name="AdminUsersUpdate"
                component={AdminUsersUpdate} />
            <Stack.Screen
                name="AlertSentUser"
                component={AlertSentUser} />
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
    const userAuth = useUserStore(state => state.userAuth)

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
            {!user && <GuestStack />}
            {user && userAuth.rol === "admin" && <AdminStack route="HomeTabsAdmin" />}
            {user && userAuth.rol === "user" && <AdminStack route="HomeTabsUser" />}
        </NavigationContainer>
    )
}
import { createStackNavigator } from "@react-navigation/stack"
import { HomeTabsAdmin } from "./HomeTabsAdmin"
import { HomeTabsUser } from "./HomeTabsUser"
import { HomeTabsGuest } from "./HomeTabsGuest"
import { AlertDetail, AlertSentUser } from "../screens/alerts"
import { Login } from "../screens/Login"
import { UserProfileEdit } from "../screens/users/UserProfileEdit"
import { RegisterUser } from "../screens/RegisterUser"
import { AdminUsersUpdate, ProfileUserReport } from "../screens/users"

const Stack = createStackNavigator()

export const Navigation = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} options={{ title: '', headerTransparent: true }} />
            <Stack.Screen name="HomeTabsAdmin" component={HomeTabsAdmin} />
            <Stack.Screen name="HomeTabsUser" component={HomeTabsUser} />
            <Stack.Screen name="HomeTabsGuest" component={HomeTabsGuest} />
            {/** Otras rutas  */}
            <Stack.Screen name="RegisterUser" component={RegisterUser} />
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
import { createStackNavigator } from "@react-navigation/stack"
import { HomeTabsAdmin } from "./HomeTabsAdmin"
import { HomeTabsUser } from "./HomeTabsUser"
import { HomeTabsGuest } from "./HomeTabsGuest"
import { AlertSentUser } from "../screens/alerts"
import { Login } from "../screens/Login"

const Stack = createStackNavigator();

export const Navigation = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} options={{ title: '', headerTransparent: true }} />
            <Stack.Screen name="HomeTabsAdmin" component={HomeTabsAdmin} />
            <Stack.Screen name="HomeTabsUser" component={HomeTabsUser} />
            <Stack.Screen name="HomeTabsGuest" component={HomeTabsGuest} />
            {/** Otras rutas  */}
            <Stack.Screen name="AlertSentUser" component={AlertSentUser} />
        </Stack.Navigator>
    )
}
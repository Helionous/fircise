import { createStackNavigator } from "@react-navigation/stack"
import { HomeTabsAdmin } from "./HomeTabsAdmin"
import { HomeTabsUser } from "./HomeTabsUser"
import { HomeTabsGuest } from "./HomeTabsGuest"
import { Login } from "../screens/Login"

const Stack = createStackNavigator();

export const Navigation = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="HomeTabsAdmin" component={HomeTabsAdmin} />
            <Stack.Screen name="HomeTabsUser" component={HomeTabsUser} />
            <Stack.Screen name="HomeTabsGuest" component={HomeTabsGuest} />
        </Stack.Navigator>
    )
}
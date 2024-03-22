import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeUser } from "../screens/home"
import { AlertUser } from "../screens/alerts"
import { ProfileUserReport } from "../screens/users"

const Tab = createBottomTabNavigator()

export const HomeTabsUser = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeUser" component={HomeUser} />
            <Tab.Screen name="AlertUser" component={AlertUser} />
            <Tab.Screen name="ProfileUserReport" component={ProfileUserReport} />
        </Tab.Navigator>
    )
}
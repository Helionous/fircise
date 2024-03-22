import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeGuest } from "../screens/home"
import { AlertDetail } from "../screens/alerts"

const Tab = createBottomTabNavigator()

export const HomeTabsGuest = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeGuestScreen" component={HomeGuest} />
            <Tab.Screen name="AlertDetail" component={AlertDetail} />
        </Tab.Navigator>
    )
}
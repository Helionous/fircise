import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AdminAlertList } from "../screens/alerts"
import { ProfileAdmin } from "../screens/users"
import { HomeAdmin } from "../screens/home"

const Tab = createBottomTabNavigator()

export const HomeTabsAdmin = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeAdmin" component={HomeAdmin} />
            <Tab.Screen name="AdminAlertList" component={AdminAlertList} />
            <Tab.Screen name="ProfileAdmin" component={ProfileAdmin} />
        </Tab.Navigator>
    )
}
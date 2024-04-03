import 'react-native-gesture-handler'
import { enableLatestRenderer } from 'react-native-maps'
import { Navigation } from './navigation'
import { NativeBaseProvider } from 'native-base'
import { AuthenticatedUserProvider } from './context'
import * as Notifications from "expo-notifications"

enableLatestRenderer()

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
})

export default function App() {
    return (
        <NativeBaseProvider>
            <AuthenticatedUserProvider>
                <Navigation />
            </AuthenticatedUserProvider>
        </NativeBaseProvider>
    )
}

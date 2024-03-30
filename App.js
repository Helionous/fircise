import 'react-native-gesture-handler'
import { enableLatestRenderer } from 'react-native-maps'
import { Navigation } from './navigation'
import { NativeBaseProvider } from 'native-base'
import { AuthenticatedUserProvider } from './context'

enableLatestRenderer()

export default function App() {
    return (
        <NativeBaseProvider>
            <AuthenticatedUserProvider>
                <Navigation />
            </AuthenticatedUserProvider>
        </NativeBaseProvider>
    )
}

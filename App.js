import 'react-native-gesture-handler'
import { enableLatestRenderer } from 'react-native-maps'
import { AuthenticatedUserProvider, Navigation } from './navigation'
import { NativeBaseProvider } from 'native-base'

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

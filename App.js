import 'react-native-gesture-handler'
import { enableLatestRenderer } from 'react-native-maps'
import { NavigationContainer } from '@react-navigation/native'
import { Navigation } from './navigation'
import { NativeBaseProvider } from 'native-base'

enableLatestRenderer()

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
        </NativeBaseProvider>
    )
}

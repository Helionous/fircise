import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { Navigation } from './navigation'
import { NativeBaseProvider } from 'native-base'

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
        </NativeBaseProvider>
    )
}

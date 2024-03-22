import { Box, Center, Heading, Text } from "native-base"
import { ScrollView } from "react-native"

export const AlertDetail = () => {
    return (
        <ScrollView style={{
            marginRight: 10,
            marginLeft: 10,
        }}>
            <Center mt={20} mb={20}>
                <Text>Mapa de google</Text>
            </Center>
            <Text>15-03-2024</Text>
            <Box mt={4}>
                <Heading>Reserva Central Abancay</Heading>
                <Text fontSize="lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ipsam, dolores assumenda sunt temporibus culpa quis magni accusantium ea tempore cupiditate iusto doloribus corporis officiis non obcaecati? Suscipit, voluptatibus quod.</Text>
            </Box>
            <Box mt={4}>
                <Heading>Magnitud</Heading>
                <Text fontSize="lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ipsam, dolores assumenda sunt temporibus culpa quis magni accusantium ea tempore cupiditate iusto doloribus corporis officiis non obcaecati? Suscipit, voluptatibus quod.</Text>
            </Box>
            <Box mt={4}>
                <Heading>Magnitud</Heading>
                <Text fontSize="lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ipsam, dolores assumenda sunt temporibus culpa quis magni accusantium ea tempore cupiditate iusto doloribus corporis officiis non obcaecati? Suscipit, voluptatibus quod.</Text>
            </Box>
        </ScrollView>
    )
}
import { Avatar, Box, Button, Center, Checkbox, FormControl, HStack, Radio, ScrollView, Text, VStack } from "native-base"

export const AdminUsersUpdate = ({ navigation }) => {
    return (
        <ScrollView>
            <Center>
                <Avatar
                    bg="green.500"
                    size="2xl"
                    mt={50} mb={5}
                    source={{
                        uri: "https://avatars.githubusercontent.com/u/111304665?v=4"
                    }} />
                <Text fontSize="xl" fontWeight="bold" mb={2}>@Henry</Text>
                <Button bg="muted.500" onPress={() => navigation.goBack()}>Actualizar</Button>
            </Center>
            <VStack space={3} ml={5} mr={5}>
                <Box>
                    <Text fontWeight="bold">Nombres</Text>
                    <Text>Dominguez Rota Maria</Text>
                </Box>
                <Box>
                    <Text fontWeight="bold">Correo</Text>
                    <Text>maria@gmail.com</Text>
                </Box>
                <Box>
                    <Text fontWeight="bold">Institución</Text>
                    <Text>Intituto Nacional de Defensa Civil</Text>
                </Box>
                <Box>
                    <Text fontWeight="bold">Permisos</Text>
                    <Radio.Group>
                        <Radio shadow={2} value="one" my="2">
                            Administrador
                        </Radio>
                        <Radio shadow={2} value="two" my="2">
                            Usuario Privilegiado
                        </Radio>
                    </Radio.Group>
                </Box>
            </VStack>
        </ScrollView>
    )
}
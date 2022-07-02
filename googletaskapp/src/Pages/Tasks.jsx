import {
    Flex,
    Stack,
    Input,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';

export default function Task() {
    return (
        <Flex
            minH={'100vh'}
            justify={'center'}
            justifyContent='center'
            py={12}
            bg={useColorModeValue('gray.800', 'gray.800')}>
            <Stack
                boxShadow={'2xl'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                p={10}
                spacing={8}
                align={'center'}>
                <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'}>
                    <Input
                        type={'text'}
                        placeholder={'Add your task here !'}
                        color={useColorModeValue('gray.800', 'gray.200')}
                        bg={useColorModeValue('gray.100', 'gray.600')}
                        rounded={'full'}
                        border={0}
                        _focus={{
                            bg: useColorModeValue('gray.200', 'gray.800'),
                            outline: 'none',
                        }}
                    />
                    <Button
                        bg={'blue.400'}
                        rounded={'full'}
                        color={'white'}
                        flex={'1 0 auto'}
                        _hover={{ bg: 'blue.500' }}
                        _focus={{ bg: 'blue.500' }}>
                        Add Task
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    );
}


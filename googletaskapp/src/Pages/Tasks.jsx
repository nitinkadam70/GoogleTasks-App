import {
    Flex,
    Stack,
    Input,
    Button,
    useColorModeValue,
    Spinner,
    Badge,
    Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTaskToken } from '../Redux/task/Get/action';
import { postTaskAction } from '../Redux/task/post/action';

export default function Task() {
    const { loading, task, error } = useSelector((store) => store.task);
    const postTask = useSelector((store) => store.postTask);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    let userid = localStorage.getItem("userid");

    useEffect(() => {
        if (task?.length === 0) {
            dispatch(getTaskToken())
        }
        if (!userid) {
            navigate("/login");
        }
    }, [dispatch, task?.length, userid])

    const handleSubmit = (e) => {
        e.preventDefault()
        let payload = { title }
        payload = JSON.stringify(payload)
        dispatch(postTaskAction(payload))
    }

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
                align={'center'}
                overflowY='scroll'
                height={'2xl'}

            >

                <form onSubmit={handleSubmit}>
                    <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'}>
                        <Input
                            onChange={(e) => setTitle(e.target.value)}
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
                            type='submit'
                            color={'white'}
                            flex={'1 0 auto'}
                            _hover={{ bg: 'blue.500' }}
                            _focus={{ bg: 'blue.500' }}>
                            Add Task
                        </Button>

                    </Stack>

                </form>

                {loading ? <Spinner size='xl' />
                    :
                    task.map((eachTask) => (
                        <Text fontSize='xl' fontWeight='bold'>
                            {eachTask.title}
                            <Badge ml='1' fontSize='0.8em' colorScheme='green'>
                                New
                            </Badge>
                        </Text>
                    ))
                }

            </Stack>
        </Flex >
    );
}


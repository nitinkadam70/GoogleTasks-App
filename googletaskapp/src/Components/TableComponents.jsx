import React from 'react'
import axios from 'axios'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    Skeleton,
    useToast,
    Stack,
    Container,
    ListItem,
    OrderedList,
    Heading,
    Box,
    Flex,
    Grid,
    GridItem,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { getTaskToken } from '../Redux/task/Get/action'
import { EditTask } from './EditTask'



const TableComponents = (props) => {
    const toast = useToast()
    const userid = localStorage.getItem("userid")

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/user/${userid}/task/${id}`)
            .then(() => {
                dispatch(getTaskToken())
                toast({
                    title: 'Deleted Successfully',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
            })
    }

    const handleEdit = (id, st) => {
        let payload = { status: st ? false : true }
        axios(`${process.env.REACT_APP_API_URL}/user/${userid}/task/${id}`, {
            method: "PATCH",
            data: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => {
                dispatch(getTaskToken())
                toast({
                    title: 'Status upadated',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
            })
            .catch((error) => console.log("Something went wrong"));

    }


    return (
        <Container>
            {props.loading ? <Stack>
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
            </Stack> :
                props.data.map((item, index) => (
                    <Grid

                        p='2%'
                        borderBottom="1px solid black"
                        templateColumns="repeat(5, 1fr)"
                        gap={6}
                        justifyContent={'center'}
                        alignItems={'center'} >
                        <GridItem>{index + 1}</GridItem>
                        <GridItem rowSpan={1} colSpan={3}>{item.title}</GridItem>
                        <GridItem>
                            <Button bg={item.status ? "whatsapp.100" : "red.100"} onClick={() => handleEdit(item._id, item.status)}>{item.status ? "Completed" : "Incompleted"}</Button>
                        </GridItem>
                        <GridItem> <EditTask id={item._id} /></GridItem>
                        <GridItem>
                            <Button colorScheme='red' rightIcon={<DeleteIcon />} onClick={() => handleDelete(item._id)}>Delete</Button>
                        </GridItem>
                    </Grid>
                ))
            }
        </Container >

    )
}

export default TableComponents
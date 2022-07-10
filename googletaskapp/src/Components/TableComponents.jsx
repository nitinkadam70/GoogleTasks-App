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
        <TableContainer  >
            <Table variant='striped' colorScheme='gray.800'>
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Task</Th>
                        <Th>Status</Th>
                        <Th>Edit</Th>
                        <Th>Delete</Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {props.loading ? <Stack>
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />

                    </Stack> : props.data.map((item, index) => (

                        <Tr key={item._id}>
                            <Td>{index + 1}</Td>
                            <Td>{item.title}</Td>
                            <Td><Button bg={item.status ? "whatsapp.100" : "red.100"} onClick={() => handleEdit(item._id, item.status)}>{item.status ? "Completed" : "Incompleted"}</Button></Td>
                            <Td >
                                <EditTask id={item._id} />
                            </Td>
                            <Td ><Button colorScheme='red' rightIcon={<DeleteIcon />} onClick={() => handleDelete(item._id)}>Delete</Button></Td>
                        </Tr>

                    ))}
                </Tbody>

            </Table>
        </TableContainer>
    )
}

export default TableComponents
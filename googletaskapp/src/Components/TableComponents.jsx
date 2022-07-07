import React from 'react'
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
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { getTaskToken } from '../Redux/task/Get/action'



const TableComponents = (props) => {
    const toast = useToast()

    const userid = localStorage.getItem("userid")

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        fetch(`${process.env.REACT_APP_API_URL}/user/${userid}/task/${id}`, {
            method: "DELETE"
        })
            .then((res) => {
                dispatch(getTaskToken())
                toast({
                    title: 'Deleted Successfully',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })

            })


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
                    {props.loading ? <Tr size={'max-content'}>
                        <Td>
                            <Skeleton>
                                <div>contents wrapped</div>
                                <div>won't be visible</div>
                            </Skeleton></Td>

                    </Tr> : props.data.map((item) => (

                        <Tr key={item._id}>
                            <Td>{"#"}</Td>
                            <Td>{item.title}</Td>
                            <Td>{item.status ? "Completed" : "Incompleted"}</Td>
                            <Td ><Button>Edit</Button></Td>
                            <Td ><Button onClick={() => handleDelete(item._id)}>Delete</Button></Td>
                        </Tr>

                    ))}
                </Tbody>

            </Table>
        </TableContainer>
    )
}

export default TableComponents
import React from 'react'
import { Button, Hide, VStack } from '@chakra-ui/react'
import { ArrowBackIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
const Profile = () => {
    const navigate = useNavigate()

    let userid = localStorage.getItem("userid");
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!userid) {
            setShow(false)
        }
        else {
            setShow(true)
        }
    }, [userid, show])


    if (!show) {
        return
    }
    return (
        <VStack direction='row' p='1%' spacing={4} position='absolute'>
            <Button onClick={() => {
                localStorage.clear()
                navigate("/")
            }}
                rightIcon={<ExternalLinkIcon />} colorScheme='teal' variant='solid'>
                Logout
            </Button>
        </VStack >
    )
}

export default Profile
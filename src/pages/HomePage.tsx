import { Divider, Container } from '@mui/material';
import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { Product } from '../components/product/Product';


export const HomePage = () => {
    return (
        <Container className="container-main" maxWidth={'lg'}>
            <Navbar />
            <Divider />
            <Product />
        </Container>
    )
}

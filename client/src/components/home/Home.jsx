import React,  { useEffect } from 'react';

import { Box, styled } from '@mui/material';

import NavBar from '../home/NavBar';
import Banner from '../home/Banner';
import MidSlide from '../home/MidSlide';
import MidSection from '../home/MidSection';
import Slide from '../home/Slide';
import { useSelector, useDispatch } from 'react-redux'; // hooks. useSelector is custom hook.
import { getProducts as listProducts } from '../../redux/actions/product-actions';

const Component = styled(Box)`
    padding: 20px 10px;
    background: #F2F2F2;
`;


const Home = () => {
    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} title="Deals of the day" timer={true}/>
                <MidSection />
                <Slide products={products} title="Discounts for you" timer={false}/>
                <Slide products={products} title="Suggesting Items" timer={false}/>
                <Slide products={products} title="Top Selection" timer={false}/>
                <Slide products={products} title="Recommended Items" timer={false}/>
                <Slide products={products} title="Trending Offers" timer={false}/>
                <Slide products={products} title="Season's top pick" timer={false}/>
                <Slide products={products} title="Top deals on Accessories" timer={false}/>
                
            </Component>
        </>
    )
}

export default Home;
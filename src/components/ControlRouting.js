import React from 'react';
import useFetch from '../hooks/useFetch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './main/MainPage';
import Page404 from './Page404';
import BasketList from './basket/BasketList';
import Header from './Header';
import ProductCard from './productCard/ProductCard';

export default function ControlRouting() {
    const [ goods, loading, error] = useFetch('https://fakestoreapi.com/products');

    return (
        <Router>
           <Header/> 
            <Routes>
                <Route path="/" element={ <MainPage goods={goods}/> } />
                <Route path="/:idProduct" element={ <ProductCard/> }/>
                <Route path="/cart" element={ <BasketList goods={goods} /> } />
                <Route path="*" element={ <Page404 /> } />
            </Routes>
        </Router>
    )
}

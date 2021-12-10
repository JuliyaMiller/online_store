import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../../hooks/useFetch';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';

export default function ProductCard() {
   const { idProduct } = useParams();
   const [data, loading, err] = useFetch(`https://fakestoreapi.com/products/${idProduct}`);

    return (
        <div>
        { data && 
            (<Grid  sx={{marginTop: '10px'}} container spacing={2}>
                <Grid item xs={8}>
                <h2>{data.title}</h2>  
                <p>{data.description}</p> 
                <h3>{data.price}$</h3>
            </Grid>
            <Grid item xs={4}>
            <img style={{width: '100%'}} src={data.image}/>    
                </Grid>
            </Grid>)
        }
        </div>
    )
}

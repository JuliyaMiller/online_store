import React,  { useEffect }  from 'react';

import { useSelector } from 'react-redux';
import { selectGood } from '../../app/basketSlice';

import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasketList(props) {
    const all_goods_list = props.goods;
    const basket_product = useSelector(selectGood);
    let show_list_product = [];
    let card_sum_price = 0;

    all_goods_list && all_goods_list.map( (products) => {
        basket_product && basket_product.map( (basketInfo) => {
            if(basketInfo.id === products.id){
               show_list_product.push({...products, ...basketInfo})
               card_sum_price += products.price * basketInfo.count;    
            }
        })
            
    });
    
    return (
        <div stale={{marginTop: 50}}>
            <Typography gutterBottom variant="h5" component="div">
                Shopping Card
            </Typography>
                      
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name of product</TableCell>
                        <TableCell align="right">Price per one item</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {show_list_product && show_list_product.map((row) => (
                        <TableRow
                        key={row.title}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.title}
                        </TableCell>
                        <TableCell align="right">{row.price}$</TableCell>
                        <TableCell align="right">{row.count}</TableCell>
                        <TableCell align="right">{ row.price * row.count }$ </TableCell>
                        </TableRow>
                    ))}
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">Total</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">{card_sum_price}</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

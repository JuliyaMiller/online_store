import React from 'react';

import GoodsItem from './GoodsItem';

//Material UI imports
import { Grid } from '@mui/material';

export default function MainPage(props) {
    const goods = props.goods;

    return (
        <Grid container spacing={4} columns={4}>
            {goods && goods.map( good => <GoodsItem good={good} key={good.id} />)}
        </Grid>
    )
}

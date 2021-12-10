import React from 'react';

import { useDispatch } from 'react-redux';
import { addProduct } from '../../app/basketSlice';

//Material UI imports
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

export default function GoodsItem(props) {

    const dispatch = useDispatch();
    const good = props.good;

    return (
        <Grid item sx={{ marginTop: 10}}>
            <Card sx={{ minHeight: 250, width: 345 }}>
                <CardMedia
                component="img"
                height="340"
                image={good.image}
                alt={good.title}
                />
                <CardContent>

                <NavLink to={`/${good.id}`}>
                    <Typography gutterBottom variant="h5" component="div">
                        {good.title.length > 20 ? good.title.substring(0, 20) + '...' : good.title }
                    </Typography>
                </NavLink>

                </CardContent>
                <CardActions>
                <Typography gutterBottom>{good.price}$</Typography>
                <Button onClick={() => dispatch(addProduct(good.id))} size="small" >Buy</Button>
                </CardActions>
            </Card>
      </Grid>
    )
}

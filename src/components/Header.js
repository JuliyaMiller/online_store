import React from 'react';
import { NavLink } from 'react-router-dom';
import  Typography from '@mui/material/Typography';


export default function Header() {
    
    const text_color = {
        textDecoration: 'none',
        fontSize: 30,
        color: 'black'
    }

    return (
        <header style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Typography variant="span">
                <NavLink to="/" style={text_color}> 
                Store
                </NavLink>
            </Typography>
            <NavLink to="/cart" style={text_color}>
                Cart
            </NavLink>
        </header>
    )
}

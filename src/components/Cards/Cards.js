import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';


const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) =>{
    if(!confirmed){
        return 'Fetching data...';
    }
    return(
        <Grid container spacing={3} justify='center' >
            <Grid item component={Card}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom >Infected</Typography>
                    <Typography variant='h5'>{confirmed.value}</Typography>
                    <Typography color='textSecondary'>Date</Typography>
                    <Typography variant='body'>Active cases</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom >Recovered</Typography>
                    <Typography variant='h5'>{recovered.value}</Typography>
                    <Typography color='textSecondary'>Date</Typography>
                    <Typography variant='body'>Recovered cases</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom >Deaths</Typography>
                    <Typography variant='h5'>{deaths.value}</Typography>
                    <Typography color='textSecondary'>Date</Typography>
                    <Typography variant='body'>Fatal cases</Typography>
                </CardContent>
            </Grid>
        </Grid>
    )
}

export default Cards;
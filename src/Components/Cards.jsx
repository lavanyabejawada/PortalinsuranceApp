import * as React from 'react';
import { Grid } from '@mui/material';

export default function Cards(){
    return(
        <div class="container">
            <Grid className='crd' container spacing={1} >
            <h5 class="card-title">Todays Schedule</h5>
            </Grid>
        </div>
    )
}




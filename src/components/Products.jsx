import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import products from './product-data';
import Product from './Product';
import Typography from '@mui/material/Typography'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Products() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h1" color="initial">Products</Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       {
         products.map((product)=>{
         return(
         
            <Grid item xs={12}sm={6} md={4} lg={3}>
              <Item>
               
                    <Product key={product.id} products={product}/>
              </Item>
            </Grid>


                  )})
              } 
        </Grid>
    </Box>
  );
}

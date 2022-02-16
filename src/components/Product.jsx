import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
import accounting from 'accounting';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product({products:{name,price,rating,image,description}}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='m-5'>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        
        action={
         <Typography
         variant='h5'
         color='textSecondary'
         >
           {"US"+accounting.formatMoney(price)}
         </Typography>
        }
        title={name}
        subheader="In stock"
      />
      <CardMedia
        top="25"
        component="img"
        height="200"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Runnuing shoes
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart" alt="añadir">
          <AddShoppingCart fontSize='large'/>
        </IconButton>
        <IconButton aria-label="share">
          {
            Array(rating)
            .fill()
            .map((_,i)=>(
              <p>&#11088;</p>
            ))
          }
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}

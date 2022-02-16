import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@mui/material';
import Logo from '../components/logo.jpg'
import '../components/navBar.css'
const NavBar2 = () => {
  return(
<div>
   
<nav className="navbar navbar-expand-sm navbar-light bg-light">
  <div className="container-fluid">
    <img src={Logo} className="navbar-brand order-1 rounded-pill" alt="Logo"></img>
    <div className='mx-3 text-dark mr-auto order-2 order-sm-3'>
                <Button variant='outlined' color="inherit">Sing in</Button>
                
                <IconButton aria-label="show cart items" color="inherit">
                    <Badge badgeContent={2} color='secondary'>
                    <ShoppingCart fontSize='large' color="primary" />
                    </Badge>
                </IconButton>
           </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse order-3 order-sm-2" id="navbarNav">
      <ul className="navbar-nav w-100 d-flex justify-content-around letter">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="a">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="a">Wholesale</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="a">Privacy policy</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  active" href="a">Refund policy</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="a">Terms Of Service</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  )
};

export default NavBar2;

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './navbar.css'
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
     
            <AppBar className='navbar'>
                <Toolbar variant="dense">
                    
                    <Grid container  className='nav-estrutura'>
                        <img src="/public/blogging.png" alt="icon do blog" />
                        <Box>
                            <Typography variant="h4" className='titulo-blog'>
                                  Portifolio 
                            </Typography>
                        </Box>
                        <Box className='menu-nav' >
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    <Link to="/home" >
                                        <Button variant='outlined' className='outlinedButton'> Home </Button>
                                    </Link>
                                </Typography>
                            </Box>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    <Link to="/postagens">
                                        <Button variant='outlined' className='outlinedButton'> Postagens </Button>
                                    </Link>
                                </Typography>
                            </Box>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    <Link to="/temas">
                                        <Button variant='outlined' className='outlinedButton'> Temas </Button>
                                    </Link>
                                </Typography>
                            </Box>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" marginRight={1}>
                                    <Link to="/cadastrar">
                                    <Button variant='outlined' className='outlinedButton'>Cadastrar Tema</Button>
                                    </Link>
                                </Typography>
                            </Box>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    <Link to="/login">
                                    <Button variant='outlined' className='outlinedButton'> logout </Button>
                                    </Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Toolbar>
            </AppBar>
        
    )
}
export default Navbar;
import { Grid , Box , Button, Typography, Toolbar, AppBar } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { useSelector, useDispatch } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/action';

function Navbar() {
    
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      ) ; 
    let navegate = useNavigate();
    const dispatch = useDispatch();

    function logout(){  
        dispatch(addToken ('')) ;
        alert('usuario deslogado')
        navegate('/login');
        }
        
        var navbarComponent;

        if(token !== ""){
            navbarComponent = 
            <AppBar className='navbar'>
            <Toolbar variant='dense'>
                
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
                                    <Button variant='outlined' className='outlinedButton'>
                                        Temas 
                                    </Button>
                                </Link>
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" marginRight={1}>
                                <Link to="/formularioTema">
                                <Button variant='outlined' className='outlinedButton'>
                                    Cadastrar Tema
                                </Button>
                                </Link>
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                
                                <Button variant='outlined' className='outlinedButton' onClick={logout}>
                                    logout 
                                </Button> 
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Toolbar>
        </AppBar>

        }

    return (
     <>
     {navbarComponent}
     </>   
    )
}
export default Navbar;
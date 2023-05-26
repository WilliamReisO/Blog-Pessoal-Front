
import {Box,Grid,Typography} from '@mui/material'
import { Button } from '@material-ui/core'
import './Home.css'
import TabPostagens from '../../components/postagems/tabPostagens/TabPostagens';
import ModalPostagem from '../../components/postagems/modalPostagem/ModalPostagem';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';

function Home() {
  const navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  ) ; 
 // o useEffect server para  
useEffect(() => {
    if (token === '') {
        alert('vc precisa do login para acessar essa pagina')
        navigate('/login')
        }
}, [token])  
 
  
  

  

  return (
    <>
        <Grid container className='gridconf'>
            <Grid alignItems="center" item xs={6}>
                <Box paddingX={6} >
                    <Typography variant="h3" gutterBottom className='titulo'>
                      Seja bem vindo (a)!
                    </Typography>
                    <Typography variant="h5" gutterBottom className='titulo' >
                      expresse aqui os seus pensamentos e opiniões!
                    </Typography>
                </Box>
                <Box className='botoes'>
                  <Box marginRight={1} className='botoes-color'>
                    <ModalPostagem/>
                  </Box>
                    <Button className='botoes-color'>
                      Ver Postagens
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={12} className='postagens'>
              <TabPostagens/>
            </Grid>
        </Grid>
    </>
);
}

export default Home;


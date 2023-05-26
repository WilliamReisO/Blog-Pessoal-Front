import React from 'react';
import { Grid , Box , Typography} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { GitHub} from '@mui/icons-material';
import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer(){
   
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  ) ; 

  var footerComponent;

  if( token !== ""){
    footerComponent =  
    <footer className='footer'>
    <Grid container className='gridPrin'>
      <Grid item xs={4} className='box1'>
        <Box className='box1'>
          <Typography>Feito com:</Typography>
          
          <Typography >React / MUI</Typography>
        </Box>
      </Grid>
      <Grid item xs={4} className='gridSec'>
        <Box className='redes' >
          <GitHub fontSize='inherit' className='iconeInd' />
          <LinkedInIcon fontSize='inherit' className='iconeInd' />
        </Box>
      </Grid>
      <Grid item xs={4} className='gridSec'>
        <Typography variant='h5'>Em parceria com: Generation Brasil</Typography>
      </Grid>
    </Grid>
  </footer>
  }
        return (
         <>
         {footerComponent}
         </>
        )
}
export default Footer;

import {Box,Grid,Typography} from '@mui/material'
import { Button } from '@material-ui/core'
import './Home.css'
function Home() {
  return (
    <>
        <Grid container className='gridconf' >
            <Grid alignItems="center" item xs={6}>
                <Box paddingX={10} >
                    <Typography variant="h3" gutterBottom className='titulo'>
                      Seja bem vindo (a)!
                    </Typography>
                    <Typography variant="h5" gutterBottom className='titulo' >
                      expresse aqui os seus pensamentos e opiniões!
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Button className='button'>
                      Ver Postagens
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={5} className='gradient-home'></Grid>
        </Grid>
    </>
);
}

export default Home;


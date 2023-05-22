
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaTemas.css';

function ListaTema() {
    return (
        <>
            <Box m={5} >
                <Card variant="outlined" className='card-temas'>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Tema
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Minha descriçaõ
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5} >
                            <Link to="" className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" className="marginLeft" size='small' color="primary">
                                        atualizar
                                    </Button>
                                </Box>
                            </Link>
                            <Link to="" className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" size='small' color="secondary">
                                        deletar
                                    </Button>
                                </Box>
                            </Link>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );

}
export default ListaTema;
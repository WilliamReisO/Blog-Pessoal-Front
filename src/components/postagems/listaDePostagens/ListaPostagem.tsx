import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import './ListaPostagem.css';

function ListaPostagem() {
  return (
    <>
      <Box m={2} >
        <Card variant="outlined" className="card-Decoration">
          <CardContent>
            <Typography className="title" >
              Postagens
            </Typography>
            <Typography variant="h5" component="h2" className="title">
              Título
            </Typography>
            <Typography variant="body2" component="p" className="text-decoration">
              Texto da Postagem
            </Typography>
            <Typography variant="body2" component="p">
              Tema
            </Typography>
          </CardContent>
          <CardActions>
            <Box className="button-position" mb={1.5}>
              <Link to="" className="text-decorator" >
                <Box mx={1}>
                  <Button variant='contained' size='small' id="atua">
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to="" className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' id="dele">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>)
}
export default ListaPostagem;
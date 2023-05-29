import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { Link, useNavigate } from 'react-router-dom';
import './ListaPostagem.css';
import { useEffect, useState } from "react";
import { Postagem } from '../../../models/Postagem';
import { buscar } from "../../../service/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function ListaPostagem() {

  const [postagens, setPostagem] = useState<Postagem[]>([])
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  ) ; 
  
  const navigate = useNavigate();

  // o useEffect server para 

  useEffect(() => {
    if (token === '') {
      toast.error('vc precisa do login para acessar essa pagina',{
        position:'top-right',
        autoClose:2000,
        closeOnClick:true,
        pauseOnHover:false,
        theme:"colored",
        progress:undefined,
      })
      navigate('/login')
    }
  }, [token])

  function getPostagem() {
    buscar("/postagens", setPostagem, {
      headers: {
        Authorization: token
      }
    })
    console.log()
  }
  useEffect(() => {
    getPostagem()
  }, [postagens.length])

  return (

    <>
      {
        postagens.map((postagem) => (
          <Box m={2} >
            <Card variant="outlined" className="card-Decoration">
              <CardContent>
                <Typography className="title" >
                  <Typography variant="body2" component="p">
                    posts do : {postagem.usuario?.nome}
                  </Typography>
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
                <Box className="button-position" mb={1.5} >
                  <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>))
      }
    </>)
}
export default ListaPostagem;
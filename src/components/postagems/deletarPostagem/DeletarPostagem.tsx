import React, { useEffect } from "react";
import { Typography, Button, Card, CardActions, CardContent, } from "@material-ui/core";
import { Box } from "@mui/material";
import "./DeletarPostagem.css";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { Postagem } from "../../../models/Postagem";
import { buscarId, deleteId } from "../../../service/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";


function DeletarPostagem() {

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  ) ; 
  const [postagens, setPostagem] = React.useState<Postagem>({
    id: 0,
    titulo: '',
    texto: '',
    data: '',
    tema: null,
    usuario:null,
  });

  useEffect(() => {
    if (token === "") {
      alert("vc precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscarId(`/postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }
  function sim() {
    navigate(`/postagens`)
    deleteId(`/postagens/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    alert('Post deletada com sucesso');
  }

  function nao() {
    navigate(`/postagens`)
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography >
                {postagens.titulo}
              </Typography>
              <Typography >
                {postagens.texto}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
              <Box mx={2}>
                <Button
                  variant="contained"
                  className="marginLeft"
                  size="large"
                  color="primary"
                  onClick={sim}
                >
                  apagar
                </Button>
              </Box>
              <Box>
                <Button variant="contained" size="large" color="secondary"
                  onClick={nao}
                >
                  cancelar
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;
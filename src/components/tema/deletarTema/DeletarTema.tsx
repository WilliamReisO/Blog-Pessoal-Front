import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import "./DeletarTema.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { buscarId, deleteId } from "../../../service/Service";
import { Tema } from "../../../models/Tema";
import { toast } from 'react-toastify';
//
function DeletarTema() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [token, setToken] = useLocalStorage("token");
  const [tema, setTema] = React.useState<Tema>();

  useEffect(() => {
    if (token === "") {
      toast.error("vc precisa estar logado" ,{
        position:'top-right',
        autoClose:2000,
        closeOnClick:true,
        pauseOnHover:false,
        theme:"colored",
        progress:undefined,
      });
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  //
  async function findById(id: string) {
    buscarId(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }
  //
  function sim() {
    navigate(`/temas`)
    deleteId(`/tema/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    toast.success('Tema deletado com sucesso',{
      position:'top-right',
      autoClose:2000,
      closeOnClick:true,
      pauseOnHover:false,
      theme:"colored",
      progress:undefined,
    });
  }
  //
  function nao() {
    navigate(`/temas`)
  }

  return (
    <>
      <Box m={2} className="topo1">
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">
                {tema?.descricao}
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
                  onClick={sim}>
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Link to="/temas">
                  <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    onClick={nao}>
                    Não
                  </Button>
                </Link>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarTema;

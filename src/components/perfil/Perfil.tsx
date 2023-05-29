import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { useState, useEffect } from 'react';
import Usuario from "../../models/Usuario";
import { buscarId } from "../../service/Service";
import { Avatar, Container, Grid } from "@mui/material";
import { Typography } from '@material-ui/core';
import { Postagem } from '../../models/Postagem';


function Perfil(){

const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    ) ; 
    
const usuarioId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
)
const [usuario, setUsuario] = useState<Usuario>({
    id: +usuarioId,
    nome:'',
    usuario:'',
    foto:'',
    senha:'',
})

async function getUserById(id: number){    
        await buscarId(`/usuarios/${id}`, setUsuario, {
            Headers: {
                Authorization: token
            }
        })
}
useEffect(() => {
    getUserById(+usuarioId)
})

return(
    <>
     <Container>
        <Grid container marginTop={5}>
            <Grid>
                <Avatar src={usuario.foto} style={{width:'15rem', height: '15rem', margin:'0 auto'}}/>
                <Typography variant='h5' align='center'>Postagem de {usuario.nome}</Typography>
                Você tem um total de {usuario.postagem?.length} postagens feitas

                {usuario.postagem?.map((post) =>(
                <p>{post.titulo}</p>
                ))}
            </Grid>
        </Grid>
     </Container>
    </>
)}
export default Perfil;
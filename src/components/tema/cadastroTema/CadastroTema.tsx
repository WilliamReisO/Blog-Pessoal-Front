import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, ChangeEvent } from "react";
import './CadastroTema.css'
import { useNavigate, useParams } from "react-router-dom";
import { Tema } from "../../../models/Tema";
import { buscarId, post, put } from "../../../service/Service";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/action";
import { toast } from 'react-toastify';


function CadastroTema() {

    const dispache =useDispatch();
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      ) ; 
    const [tema, setTema] = React.useState<Tema>({
        id: 0,
        descricao: ''
    });

    useEffect(() => {
        if (token === '') {
            dispache(addToken(""))
            toast.error('vc precisa estar logado',{
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

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscarId(`/temas/${id}`, setTema, {
            headers: {
                Authorization: token
            }
        })

    }

    function updateTema(event: ChangeEvent<HTMLInputElement>) {

        setTema({
            ...tema,
            [event.target.name]: event.target.value
        })
    }

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log("tema " + JSON.stringify(tema))

        if (id !== undefined) {
            console.log(tema)
            put(`/temas/`, tema, setTema, {
                headers: {
                    Authorization: token
                }
            })
            toast.success('Tema Atualizado com sucesso',{
                position:'top-right',
                autoClose:2000,
                closeOnClick:true,
                pauseOnHover:false,
                theme:"colored",
                progress:undefined,
            });
        } else {
            post('/temas', tema, setTema, {
                headers: {
                    Authorization: token
                }
            })
            toast.success('Tema cadastrado com sucesso',{
                position:'top-right',
                autoClose:2000,
                closeOnClick:true,
                pauseOnHover:false,
                theme:"colored",
                progress:undefined,
            });
        }
        back()
    }
    function back() {
        navigate('/temas')
    }
    return (

        <Container maxWidth='sm'className="topo" >
            <form onSubmit={onSubmit} className="form">
                <Typography variant="h4" className="textTema">
                    Formulario de {id !== undefined ? ' atualização ' : ' cadastro '} de Tema
                </Typography>
                <TextField value={tema.descricao} onChange={(event: ChangeEvent<HTMLInputElement>) => updateTema(event)} id="descricao" 
                label="Descrição" variant="outlined" name="descricao">
                    Descrição
                </TextField>
                <Button type="submit" variant="contained" color="primary" >
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}
export default CadastroTema;
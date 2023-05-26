import { Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { Tema } from '../../../models/Tema';
import { Postagem } from "../../../models/Postagem";
import { buscar, buscarId, post, put } from '../../../service/Service';
import'./CadastroPost.css'
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/action";


function CadastroPost() {

    let navigate = useNavigate();
    const dispach = useDispatch();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      ) ; 
    const [temas, setTemas] = useState<Tema[]>([])

    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        data: '',
        tema: null,
        usuario : null,
    });

    useEffect(() => {
        if (token === '') {
            dispach(addToken(""))
            alert('vc precisa estar logado')
            navigate('/login')
        }
    }, [token])

    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })



    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        try {
            await buscar('/temas', setTemas, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error: any) {

            if (error.toString().contains('403')) {
                dispach(addToken(''));
                alert('Token expirado, logue novamente');
                navigate('/login');
            }
        }
    }

    async function findByIdPostagem(id: string) {
        await buscarId(`/postagens/${id}`, setPostagem, {
            headers: {
                Authorization: token
            }
        })
    }

    async function updatedPostagem(event: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [event.target.name]: event.target.value,
            tema: tema
        })
    }

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log("tema " + JSON.stringify(tema))

        if (id !== undefined) {
            try {
                await put(`/postagens/`, postagem, setPostagem, {
                    headers: {
                        Authorization: token
                    },
                });
                alert('Postagem atualizada')
                navigate('/postagens')
            } catch (error) {
                alert('Erro ao atualizar postagem')
            }
        } else {
            try {
                post(`/postagens`, postagem, setPostagem, {
                    headers: {
                        Authorization: token
                    },
                }),
                    alert('Postagem criado com sucesso');
                navigate('/postagens')
            }
            catch (error) {
                alert('Erro ao criar postagem')
            }
        }
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit} >
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >
                    Formulário de {id !== undefined ? ' atualização ' : ' cadastro '} postagem
                </Typography>
                <TextField value={postagem.titulo} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedPostagem(event)}
                    id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth helperText='pelo menos 5 caracteres' />
                <TextField value={postagem.texto} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedPostagem(event)}
                    id="texto" label="Texto da postagem" name="texto" variant="outlined" margin="normal" fullWidth multiline rows={4} />
                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">
                        Tema
                    </InputLabel>

                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(event) =>
                            buscarId(`/temas/${event.target.value}`, setTema, {
                                headers: {
                                    Authorization: token,
                                },
                            })
                        }
                    >
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>
                                    {tema.descricao}
                                </MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPost;

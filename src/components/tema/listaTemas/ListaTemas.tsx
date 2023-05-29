
import { Link, useNavigate } from 'react-router-dom';
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaTemas.css';
import { useState, useEffect } from 'react';
import { Tema } from '../../../models/Tema';
import { buscar } from '../../../service/Service';
import { addToken } from '../../../store/tokens/action';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
function ListaTema() {

    const [temas, setTemas] = useState<Tema[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      ) ; 
    const navigate = useNavigate();
    const dispach = useDispatch();

    async function getTemas() {
        try {
            await buscar("/temas", setTemas, {
                headers: {
                    Authorization: token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toast.error('O seu token expirou logue novamente' ,{
                position:'top-right',
                autoClose:2000,
                closeOnClick:true,
                pauseOnHover:false,
                theme:"colored",
                progress:undefined,})
                dispach(addToken(""))
                navigate('/login')
            }
        }

    }


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

    //Aqui é onde o codigo ira buscar o tema requisitado em /temas é o que é ele encontra iar monstar em SetTem  
    // porem para rodar ira precisar da autorization token . 


    useEffect(() => {
        getTemas()
    }, [temas.length])

    return (
        <>
        {temas.length === 0 ? 
        <div><span className="loader"></span></div> 
        : <></> }
            {
                temas.map(tema => (
                    <Box m={5} >
                        <Card variant="outlined" className='card-temas'>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Tema
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {tema.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5} >
                                    <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary">
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
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
        </>
    );

}
export default ListaTema;
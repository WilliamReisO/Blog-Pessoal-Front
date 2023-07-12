import {  Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { Grid ,Typography, TextField , Box ,Button} from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import UsuarioLogin from '../../models/UsuarioLogin';
import { login } from '../../service/Service';
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/tokens/action';
import { toast } from 'react-toastify';

function Login() {
  // cria a variavel para navegação interna pela rota
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // cria um estado para armazenamento no localStorage do navegador
  const [token, setToken] = useState ("")

  // cria um estado de controle para o usuário preencher os dados de login
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: '',
  });
  const [respUsuarioLogin, setRespUsuarioLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: '',
  });

  // atualiza os dados do estado acima, e ajuda a formar o JSON para a requisição
  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [event.target.name]: event.target.value,
    });
  }

  // função que envia o formulário para o backend
  async function enviar(event: ChangeEvent<HTMLFormElement>) {
    // previne que o formulario atualize a pagina
    event.preventDefault();
    try {
      await login('/usuarios/logar', usuarioLogin, setRespUsuarioLogin);
      // alert('Usuario logado com sucesso');
      toast.success('Usuário logado com sucesso', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } catch (error) {
      // alert('Usuário e/ou senha inválidos');
      toast.error('Usuário e/ou senha inválidos', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  }
  // Efeito que fica de olho no token, e quando chega algo diferente de vazio, navega o usuario pra home
  useEffect(() => {
    if (token !== '') {
      //dispatch(addToken(token));
      //navigate('/home');
    }
  }, [token]);

  useEffect(() => {
    if(respUsuarioLogin.token !== ''){
      dispatch(addToken(respUsuarioLogin.token))
      dispatch(addId(respUsuarioLogin.id.toString()))
      navigate('/home')
      console.log({respUsuarioLogin})
    }
  },[respUsuarioLogin.token])

  return (
   
  <Grid container className="formato-card-login">
    <Box className="card">
      <form className="form" onSubmit={enviar} >
        <Typography variant="h3"className="form-text">
          Entrar
        </Typography>
          <Box className="form-input">
            <TextField value={usuarioLogin.usuario} 
            onChange={(event:ChangeEvent<HTMLInputElement>) => updateModel(event)}  
            id='usuario' 
            variant="standard" 
            name='usuario' 
            label="Nome de Usuario" 
            fullWidth />
          </Box>

          <Box className="form-input">
            <TextField  
            value ={usuarioLogin.senha} 
            onChange={(event:ChangeEvent<HTMLInputElement>) => updateModel(event)} 
            id ='senha' 
            error={usuarioLogin.senha.length < 8 && usuarioLogin.senha.length > 0}
            helperText={usuarioLogin.senha.length < 8 && usuarioLogin.senha.length > 0 ? 'Tem que ter mais de 8 caracteres' : ''}
            variant="standard" 
            name='senha' 
            label="Senha" 
            type='password' 
            fullWidth />
          </Box>
        
          <Button variant='contained' fullWidth className='button' type='submit'>
            Logar
          </Button>
          
        <Box >
          <Box className='texto'>
          <Typography variant = 'subtitle1' >
            Não tem uma conta ?
          </Typography>
          </Box>

          <Box className='button-cadastro'>
          <Typography variant='subtitle2' gutterBottom >
              <Link to="/cadastroUsuario">
              <Button> Cadastre-se </Button> 
              </Link>
          </Typography>
        </Box>
      </Box>
      </form>
    </Box>
  </Grid>
);
}
export default Login
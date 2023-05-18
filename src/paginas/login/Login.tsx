import {  Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { Grid ,Typography, TextField , Box ,Button} from '@mui/material';
import useLocalStorage from 'react-use-localstorage';
import { ChangeEvent, useEffect, useState } from 'react';
import UsuarioLogin from '../../models/UsuarioLogin';
import { login } from '../../services/Service';



function Login() {
  // cria a variavel para navegação interna pela rota
  const navigate = useNavigate();

  // cria um estado para armazenamento no localStorage do navegador
  const [token, setToken] = useLocalStorage('token');

  // cria um estado de controle para o usuário preencher os dados de login
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
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
      await login('/usuarios/logar', usuarioLogin, setToken);
      alert('Usuario logado com sucesso');
    } catch (error) {
      alert('Usuário e/ou senha inválidos');
    }
  }

  // Efeito que fica de olho no token, e quando chega algo diferente de vazio, navega o usuario pra home
  useEffect(() => {
    if (token !== '') {
      navigate('/home');
    }
  }, [token]);

  return (
   
  <Grid
    container
    alignItems={'center'}
    justifyContent={'center'}
    style={{ minHeight:'100vh',width:'1200px', backgroundColor: "#fcbf49" }} 
    className='contained'
    >
    <Box className="card">
      <form className="form" onSubmit={enviar} >
        <Typography variant="h3" align="center" textTransform={'uppercase'} className="form-title" color='#fff'>
          Login
        </Typography>
        <Box className="form-input">
          <TextField value ={usuarioLogin.usuario} onChange={(event:ChangeEvent<HTMLInputElement>) => updateModel(event)}  id ='usuario'variant="standard" label="Nome de Usuario" fullWidth />
        </Box>
        <Box className="form-input">
          <TextField  value ={usuarioLogin.senha} onChange={(event:ChangeEvent<HTMLInputElement>) => updateModel(event)} id ='senha' variant="standard" label="Senha" type='password' fullWidth />
        </Box>
        <Button variant='contained' fullWidth className='button' type='submit'>
          Logar
        </Button>
       <Box display={'flex'} justifyContent={'center'} marginTop={2}>
        <Typography variant = 'subtitle1' gutterBottom align='center'>
          Não tem uma conta ?
        </Typography>
        <Typography variant='subtitle2' gutterBottom align='center' style={{fontWeight: 'bold'}}>
          <Link to="/cadastroUsuario">Cadastre-se</Link>
        </Typography>
      </Box>
      </form>
    </Box>
    <Grid xs={5} className=''>
    </Grid>
  </Grid>
);
}


export default Login
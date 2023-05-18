import { Link } from 'react-router-dom';
import './Login.css';
import { Grid ,Typography, TextField , Box ,Button} from '@mui/material';
import { UsuarioLogin } from '../../model/UsuarioLogin';
import { ChangeEvent, useState } from 'react';
import { login } from '../../service/service';


function Login() {
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
    id:0,
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    dataNascimento: '',
    telefone: '',
    endereco:'',
    cep:'',
    cidade:'',
    estado:'',
});
  function UpdateModel(event: ChangeEvent<HTMLInputElement>){
    setUsuarioLogin({
      ...usuarioLogin,
      [event.target.name]:event.target.value
    })
    console.log(usuarioLogin)
  }
  function enviar(event: ChangeEvent<HTMLInputElement>){
    event.preventDefault();
    login('/usuarios/logar' , usuarioLogin ,setUsuarioLogin)
  }

  return (
   
  <Grid
    container
    alignItems={'center'}
    justifyContent={'center'}
    style={{ minHeight:'100vh', backgroundColor: "#fcbf49" }} 

    >
    <Box className="card">
      <form className="form" >
        <Typography variant="h3" align="center" textTransform={'uppercase'} className="form-title" color='#fff'>
          Login
        </Typography>
        <Box className="form-input">
          <TextField variant="standard" label="Nome de Usuario" fullWidth />
        </Box>
        <Box className="form-input">
          <TextField variant="standard" label="Senha" type='password' fullWidth />
        </Box>
        <Button variant='contained' fullWidth className='button' type='submit'>
          Logar
        </Button>
       <Box display={'flex'} justifyContent={'center'} marginTop={2}>
        <Typography variant = 'subtitle1' gutterBottom align='center'>
          Não tem uma conta ?
        </Typography>
        <Typography variant='subtitle2' gutterBottom align='center' style={{fontWeight: 'bold'}}>
          <Link to="/cadastro">Cadastre-se</Link>
        </Typography>
      </Box>
      </form>
    </Box>
    <Grid xs={5} className='container'>
    </Grid>
  </Grid>
);
}

export default Login
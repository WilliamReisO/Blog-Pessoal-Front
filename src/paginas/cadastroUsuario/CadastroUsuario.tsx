import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import './CadastroUsuario.css';
import { useNavigate } from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';

function CadastroUsuario() {
  // constante para efetuar a navegação do usuário por dentro da lógica
  const navigate = useNavigate();

  // state para controlar o formulário enquanto o usuário preenche o mesmo
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    foto: '',
    senha: '',
  });

  // state que vai receber a resposta do backend, para verificar se veio tudo ok
  const [usuarioResp, setUsuarioResp] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    foto: '',
    senha: '',
  });

  // state para armazenar o campo de confirmação de senha, e fazer a checagem com a senha do usuário
  const [confirmarSenha, setConfirmarSenha] = useState('');

  // função para atualizar o estado do confirmar senha
  function confirmaSenha(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value);
  }

  // função para atualizar o estado de controle do formulário de usuário, automatizada para todos os campos
  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [event.target.name]: event.target.value,
    });
  }

  // função de disparo da requisição para o backend, é bom deixar ela como assincrona
  async function cadastrar(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    // verificar se os campos de senha e confirmar senha são iguais, e com no minimo 8 caracteres
    if (usuario.senha === confirmarSenha && usuario.senha.length >= 8) {
      // caso passe pelo IF, vai executar a tentativa de cadastro, e dar o alerta de sucesso
      try {
        await cadastrarUsuario('/usuarios/cadastrar', usuario, setUsuarioResp);
        alert('Usuário cadastrado com sucesso')
      } catch (error) {
        // se der erro no cadastro, por exemplo por e-mail repetido, vai cair nessa msg de erro
        alert('Falha ao cadastrar o usuário, verifique os campos');
      }
    } else {
      // aqui é a mensagem de erro para o caso dos campos de senha estarem diferentes, vai avisar, e apagar os dois campos
      alert('Os campos de Senha e Confirmar Senha estão diferentes');
      setUsuario({ ...usuario, senha: '' });
      setConfirmarSenha('')
    }
  }

  // controle de efeito, para levar a pessoa para a tela de login assim que o backend devolver o JSON de cadastro ok
  useEffect(() => {
    if (usuarioResp.id !== 0) {
      navigate('/login');
    }
  }, [usuarioResp]);

  // função de navegação para o botão de cancelar
  // (só fiz essa função pq se eu usasse o Link no botão, quebrava o meu layout, ela não é necessária, da pra fazer com Link mesmo)
  function voltar(){
    navigate('/login')
  }

  return (
    <Grid container direction='row' 
          justifyContent='center'
          alignItems='center'
          >
      <Grid item xs={6} className='imag-cadastro'></Grid>
      <Grid item xs={6} alignItems='center' >
        <Box>
          <form className='EstiloFom' onSubmit={cadastrar}>
            <Typography variant="h4" align="center" textTransform={'uppercase'} className="texto2"  >
              Cadastrar
            </Typography>
            <Box className="formato">
              <TextField value={usuario.foto} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id='foto' label="foto" name='foto' variant="outlined" type='image' fullWidth />
            </Box >
            <Box className="formato">
              <TextField value={usuario.nome} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id='nome' label="Nome" variant="outlined" name='nome' fullWidth />
            </Box>
            <Box className="formato">
              <TextField value={usuario.senha} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id='senha' label="Senha" name='senha' variant="outlined" type='password' fullWidth />
            </Box >
            <Box className="formato">
              <TextField value={usuario.usuario} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id='usuario' label="Usuario" name='usuario' variant="outlined" fullWidth />
            </Box >
            <Box className="formato">
              <TextField value={confirmarSenha} onChange={(event: ChangeEvent<HTMLInputElement>) => confirmaSenha(event)} id='confirmarSenha' label="Confirmar Senha" name='confirmar senha' variant="outlined" fullWidth />
            </Box >
              <Button variant='contained' fullWidth className='button-01' onClick={voltar}>
                Cancelar
              </Button>
            <Button variant='contained' fullWidth className='button-02' type='submit'>
              Cadastrar
            </Button>

          </form>
        </Box>
      </Grid>
    </Grid>
  )
}

export default CadastroUsuario;
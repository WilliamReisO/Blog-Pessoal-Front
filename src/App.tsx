import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/tema/listaTemas/ListaTemas';
import ListaPostagem from './components/postagems/listaDePostagens/ListaPostagens';
import CadastroPost from './components/postagems/cadastrarPost/CadastroPost';
import CadastroTema from './components/tema/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagems/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/tema/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/store';
import Perfil from './components/perfil/Perfil';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/estaticos/navBar/NavBar';
import Footer from './components/estaticos/footer/Footer';

function App() {
  return (
<Provider store = {store}>
  <ToastContainer/>
    <Router>
      <Navbar/>
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element=
            {<Login/>} />

          <Route path="/login" element=
            {<Login/>} />

          <Route path="/perfil" element=
            {<Perfil/>} />

          <Route path="/login" element=
            {<Login/>} />

          <Route path="/home" element=
            {<Home/>} />
  
          <Route path="/temas" element=
            {<ListaTema/>} />

          <Route path="/postagens" element=
            {<ListaPostagem/>} />

          <Route path="/cadastroUsuario" element=
            {<CadastroUsuario/>} />

          <Route path="/formulariopostagem" element=
          {<CadastroPost/>} />

          <Route path="/formulariopostagem/:id" element=
          {<CadastroPost/>} />

          <Route path="/formularioTema" element=
          {<CadastroTema/>} />

          <Route path="/formularioTema/:id" element=
          {<CadastroTema/>} />

          <Route path="/deletarPostagem/:id" element=
          {<DeletarPostagem/>} />

          <Route path="/deletarTema/:id" element=
          {<DeletarTema/>} />

        </Routes>
         
      </div>
      <Footer/>
    </Router>
  </Provider>
  )
}

export default App;

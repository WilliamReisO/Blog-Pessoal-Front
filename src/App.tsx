import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/estaticos/NavBar/navbar';
import Footer from './components/estaticos/Footer/footer';
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

function App() {
  return (
<Provider store = {store}>
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element=
            {<Login />} />

          <Route path="/login" element=
            {<Login />} />

          <Route path="/home" element=
            {<Home />} />
  
          <Route path="/temas" element=
            {<ListaTema />} />

          <Route path="/postagens" element=
            {<ListaPostagem />} />

          <Route path="/cadastroUsuario" element=
            {<CadastroUsuario />} />

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
      <Footer />
    </Router>
  </Provider>
  )
}

export default App;

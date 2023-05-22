import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import Navbar from './components/estaticos/NavBar/navbar';
import Footer from './components/estaticos/Footer/footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import TabPostagens from './components/postagems/tabPostagens/TabPostagens';
import ListaTema from './components/listaTemas/ListaTemas';
import ListaPostagem from './components/postagems/listaDePostagens/ListaPostagem';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element=
          {<Login />} />

          <Route path="/home" element=
          {<Home />} />
        
          <Route path="/login" element=
          {<Login />} />

          <Route path="/temas" element=
          {<ListaTema />} />

          <Route path="/postagens" element=
          {<ListaPostagem />} />

          <Route path="/cadastroUsuario" element=
          {<CadastroUsuario />} />
          
        </Routes>
      </div>
      <TabPostagens/>
      <Footer />
    </Router>
  )
}

export default App;

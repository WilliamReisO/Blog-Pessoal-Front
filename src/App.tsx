import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import Navbar from './components/estaticos/NavBar/navbar';
import Footer from './components/estaticos/Footer/footer';
import Home from './paginas/home/Home';
import './App.css';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

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

          <Route path="/cadastroUsuario" element=
          {<CadastroUsuario />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;

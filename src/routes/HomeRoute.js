import { Route, BrowserRouter as Router} from 'react-router-dom';

import Navbar from '../components/Navbar';
import Slidebar from '../components/Sidebar';
import Home from '../pages/Home';
import Cursos from '../pages/Cursos';
import Perfil from '../pages/Perfil';
import CreaUsuario from '../pages/CreaUsuario';
import Footer from '../components/Footer';

export default function HomeRoute() {
    return (
        <Router>
        <div className="flex">
         <Slidebar></Slidebar>
         <div className="content w-100" >
         <Navbar/>
           <Route  path="/" exact = {true} component={Home}></Route>
           <Route path="/crear" exact = {true} component={CreaUsuario}></Route>
           <Route path="/cursos" exact = {true} component={Cursos}></Route>
           <Route path="/perfil" exact = {true} component={Perfil}></Route>
           <Route path="/registro" exact = {true} component={CreaUsuario}></Route>
         
         </div>
         <hr></hr>
         
      </div>
      <Footer></Footer>
      </Router>
    )
}

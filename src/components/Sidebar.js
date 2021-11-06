import { NavLink } from "react-router-dom";
import * as BiIcons from 'react-icons/bi'
import * as MdIcons from 'react-icons/md'
import * as FaIcons from 'react-icons/fa'

const Sidebar = (props) =>{
    return (
       <div className="sidebar bg-light toggle">
         <ul>
             <li>
                 <NavLink to="/" className="text-dark rounded py-2 w-100 d-inline-block px-3" exact activeClassName="active"><FaIcons.FaHome className="me-2"/>Inicio</NavLink>
             </li>
             <li>
                 <NavLink to="/cursos"  className="text-dark rounded py-2 w-100 d-inline-block px-3" exact activeClassName="active"><MdIcons.MdSchool className="me-2"/>Cursos</NavLink>
             </li>
             <li>
                 <NavLink to="/perfil"  className="text-dark rounded py-2 w-100 d-inline-block px-3" exact activeClassName="active"><BiIcons.BiUserCircle className="me-2"/>Perfil</NavLink>
             </li>
             
         </ul>
       </div>
    )
}

export default Sidebar;
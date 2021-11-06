import {  NavLink } from "react-router-dom";


const Home = () => {


    return (
        <div className="container text-center">
            <img className="my-1 py-2 w-100 rounded" src="https://dailyverses.net/images/es/nvi/xl/proverbios-16-3-2.jpg" alt="..."></img>
            <NavLink className="btn btn-primary" to="/crear">Crear Usuario</NavLink>
        </div>
    )
}

export default Home;
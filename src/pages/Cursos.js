import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useAuth
    from "../auth/useAuth";
const Cursos = () => {
    const auth = useAuth();

    const [todos, setTodos] = useState()



    useEffect(() => {
        const fethCursos = async () => {


            const myHeaders = new Headers();
            myHeaders.append("x-token", auth.user.token);


            const requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("https://project-desarrollo.herokuapp.com/api/cursos/", requestOptions)
                .then(response => response.json())
                .then(result =>  setTodos(result.cursos))
                .catch(error => console.log('error', error));




        }
        fethCursos()
    }, [])


    return (
        <div>
            <blockquote className="blockquote">
                <h1 className="mx-2 text-center">Listado de Cursos</h1>
            </blockquote>
            {  
                !todos ?
                    "cargando..."

                    : todos.map((todo, index) => {
                        return <div className="card w-100" key={index}>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item text-left">{todo.nombre}
                                    <button type="button" className="btn btn-primary float-right "><NavLink to={`/cursos/${todo._id}`} className="text-dark d-inline-block navlink">Ver Actividades</NavLink></button>
                                </li>

                            </ul>
                        </div>
                    })
            }



        </div>
    )
}

export default Cursos;
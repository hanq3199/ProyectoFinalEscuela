
import { useHistory } from "react-router";
import useAuth from "../auth/useAuth";
const axios = require('axios');


export default function CreaUsuario() {

    const history = useHistory()
    const auth = useAuth()

    const creaUsuario = async () => {

        const nombre = document.getElementById('nombre').value + ' ' + document.getElementById('apellidos').value;
        const estado = true;
        const correo = document.getElementById('correo').value;
        const password = '123456';
        const rol = document.getElementById('rol').value;

        const data = {
            nombre,
            estado,
            correo,
            password,
            rol
        }

        const myHeaders = new Headers();
        myHeaders.append("x-token", auth.user.token);

        const config = {
            method: 'post',
            url: 'https://project-desarrollo.herokuapp.com/api/usuarios/',
            headers: { 'x-token': auth.user.token },
            body: data
        };

        axios.post('https://project-desarrollo.herokuapp.com/api/usuarios/', data, { headers: { 'x-token': auth.user.token } })
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error.response);
            });

            history.push("/")

    }
    return (
        <div className="container">
            <h1>Crear Estudiante</h1>
            <div className="text-center">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" placeholder="Nombre" id="nombre"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="apellidos">Apellidos</label>
                    <input type="text" className="form-control" placeholder="Apellidos" id="apellidos"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="direccion">Dirección</label>
                    <input type="text" className="form-control" placeholder="Dirección" id="direccion"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="identificacion">Numero de Identificación</label>
                    <input type="text" className="form-control" placeholder="Numero de Identificación" id="identificacion"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="telefono">Numero de Telefono</label>
                    <input type="text" className="form-control" placeholder="Numero de Telefono" id="numero"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="correo">Correo Electronico</label>
                    <input type="email" className="form-control" placeholder="Correo Electronico" id="correo"></input>
                </div>



                <div className="form-group">
                    <label htmlFor="fecha">Fecha de Nacimiento</label>

                    <input type="date" id="fecha" name="fecha"

                        min="1990-01-01" />

                </div>
                <div className="form-group">
                    <label htmlFor="carrera">Seleccione su Carrera</label>
                    <div className="carrera">
                        <select >
                            <option defaultValue="selected">Ingenieria en Sistemas</option>
                            <option>Ingenieria Civil</option>
                            <option>Ingenieria en Electrisidad</option>
                            <option>Ingenieria en Mecatronica</option>
                            <option>Ciencias Juridicas y Sociales</option>
                            <option>Ciencias de la Salud</option>
                            <option>Enfermeria</option>
                            <option>Profesorado</option>
                            <option>Licenciatura en Psicologia</option>
                            <option>Criminologia</option>
                            <option>Auditoria</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="rol">Seleccione su usuario</label>
                    <div className="rol">
                        <select id="rol">
                            <option value="ESTUDIANTE_ROLE">Estudiante</option>
                            <option value="CATEDRATICO_ROLE">Catedratico</option>
                            <option value="ADMIN_ROLE">Administracion</option>
                        </select>
                    </div>



                </div>
                <div className="clearfix"></div>

                <button className="btn btn-info btn-lg btn-responsive " id="crear" onClick={creaUsuario}>  <h1><span className="glyphicon glyphicon-user"></span>Crear Usuario</h1></button>

            </div>
        </div>
    )
}

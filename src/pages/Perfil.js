import useAuth from '../auth/useAuth'

const Perfil = () => {

    const auth = useAuth();
    return (
        <div className="container bg-dark">

            <div className="card text-dark mb-3">
                <div className="card-header"><h1>Perfil del Usuario</h1></div>
                <div className="row align-items-start">
                    <div className="col"> <img src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg" alt="Logo" width="200px" /> </div>
                    <div className="col" width="200px">
                        <h3 className="card-title">{auth.user.nombre}</h3>
                        <h4 className="card-text">{auth.user.correo}</h4>
                        <h4 className="card-text">{auth.user.rol}</h4></div>
                </div>
            </div>
        </div>
    )
}

export default Perfil;
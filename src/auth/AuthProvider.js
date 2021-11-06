import { createContext, useState, useEffect } from "react";
const axios = require('axios').default;

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    useEffect(() => {
        try {
            localStorage.setItem("user", JSON.stringify(user));
        } catch (error) {
            localStorage.removeItem("user");
            console.log(error);
        }
    }, [user]);

    const contextValue = {
        user,
         login(user = '', pass = '') {

            const  data = {correo: user, password: pass};



axios.post('https://project-desarrollo.herokuapp.com/api/login',data)
.then(function (response) {
  console.log(JSON.stringify(response.data));

  const resp = response.data;
 setUser({
     nombre: resp.usuario.nombre,
     rol: resp.usuario.rol,
     correo: resp.usuario.correo,
     token: resp.token
    });
})
.catch(function (error) {
  console.log(error);
});

        },
        logout() {
            setUser(null);
        },
        isLogged() {
            return !!user;
        },
    };

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;

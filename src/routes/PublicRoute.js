import { Route , Redirect} from 'react-router-dom';
import useAuth from "../auth/useAuth";

import React from 'react'

export default function PublicRoute({ component: Component, ...rest }) {
   // const auth = useAuth();
   const auth = useAuth();;
  
    return (
      <Route {...rest}>
        {!auth.isLogged() ? (
          <Component />
        ) : (
          <Redirect exact to="/" />
        )}
      </Route>
    );
  }

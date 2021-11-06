import React from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import AuthProvider from "./auth/AuthProvider";

import './App.scss';

// import Footer from './components/Footer';



import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Login from './pages/Login';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import HomeRoute from './routes/HomeRoute';



function App() {

  return (
    <AuthProvider>
    <Router>
      <Switch>
     
      <PublicRoute path="/login" component={Login}/>
      <PrivateRoute path="/"  component={HomeRoute}/>
      </Switch>
    </Router>
    
    </AuthProvider>
  );
}

export default App;


 /* 
      <Footer/> */
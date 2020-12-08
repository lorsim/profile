import React from 'react';
import './App.css';
import Users from './secure/Users';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './public/Login';
import Register from './public/Register';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
            <Route path={'/'} exact component= {Users} />
            <Route path={'/login'} component={Login} />
            <Route path={'/register'} component={Register} />
        </BrowserRouter>

      </div>
  );
}

export default App;

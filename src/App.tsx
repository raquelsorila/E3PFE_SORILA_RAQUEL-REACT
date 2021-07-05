/* Importing libraries and components */

import React from 'react';
import Login from './pages/Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import Register from './pages/Register'
import Home from './pages/Home'

function App() {
  return (
    <div className="container">
      
      
      <Router> 
        {/* Router is used to allow changing the page without loading */}
        <Route path="/" exact component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/home" component = {Home}/>
      </Router>
      

    </div>
  );
}

export default App;

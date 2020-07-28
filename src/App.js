import React,{Suspense} from 'react';
import './App.css';
import Login from './components/Login/Login';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import {PrivateRoute} from './utils/PrivateRoute';

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>

            <PrivateRoute exact path="/" component={Home}></PrivateRoute>

            <Redirect from="*" to="/"/>
          </Switch>
        </Suspense>
      </Router>  
    </div>
  );
}

export default App;

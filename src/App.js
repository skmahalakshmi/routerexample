import logo from './logo.svg';
import React, { lazy, Suspense } from 'react';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
//import About from "./components/About";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Projects from './components/Projects';
import Project from './components/Project';
import Topics from './components/Topics';
import Sidebar from './components/Sidebar';
import Register from './components/Register';
const About = lazy(() => import('./components/About'));
function App() {
    const location = window.location.pathname;
    console.log(location);
    return (
        <div className="App">
            <Header />
            <Suspense fallback={<h2>Wait Loading.......</h2>}>
                <Switch>
                    <Redirect from="/todoappv1" to="/todoappv2" />
                    <Route path='/about'>
                        <About />
                    </Route>
                    <PrivateRoute path='/sidebar' component={Sidebar} />


                    <Route path='/content'>
                        <Content />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <PrivateRoute path='/dashboard' component={Dashboard} />

                    <PrivateRoute path='/projects/:id' component={Project} />
                    <PrivateRoute path='/projects' component={Projects} />

                    <PrivateRoute path='/topics'>
                        <Topics />
                    </PrivateRoute>
                    <Route path='/logout'>
                        <Redirect to="/login" />
                    </Route>
                    <Route path='/register'>
                        <Register />
                    </Route>
                    <Route path='/' exact>
                        <Content />
                    </Route>
                    <Route path='*'>
                        <h3>404 error</h3>
                    </Route>

                </Switch>
            </Suspense>



        </div>
    );
}

export default App;

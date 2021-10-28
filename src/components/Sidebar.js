import React from 'react';
import { Link,NavLink, useParams, useRouteMatch, Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import Project from './Project';
import Topics from './Topics';
import { BrowserRouter as Router } from 'react-router-dom';

    const routes = [
        {
            path: "/projects/:id",
            component: () => <Project />
        },
        {
            path: "/projects/",
            component: () => <Projects />
        },
        {
            path: "/topics",
            component: () => <Topics />
        }
];
export default function Sidebar() {
    return (
        <Router>
            <div style={{ display: "flex" }}>
                <div
                    style={{
                        padding: "10px",
                        width: "20%",
                        height: "100vh",
                        background:"#f0f0f0"

                       
                    }}>
                    <ul style={{
                        padding: "0",
                        listStyleType: "none"


                    }}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <NavLink to="/projects" activeStyle={{color:"maroon"}}>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/topics" activeClassName="text-danger">Topics</NavLink>
                        </li>

                        </ul>
                </div>

                <div style={{ flex: 1, padding: "10px" }}>
                    <Switch>
                        {
                            routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}



                                />
                            )
                                )
                        }

                    </Switch>

                        
                </div>

            </div>
        </Router>
    );
}

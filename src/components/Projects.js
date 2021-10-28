import React, { useState } from 'react';
import { Link, useRouteMatch, useHistory, Prompt } from 'react-router-dom';
export default function Projects() {
    let match = useRouteMatch();
    const [projectid, setProjectid] = useState("");
    let history = useHistory();
    const redirect = (e) => {
        e.preventDefault();
       
        history.push(`${match.url}/${projectid}`);
    }
    return (
        <div>
             
            <h1>My Projects</h1>
            
           
            <nav className="navbar navbar-expand-lg">
            <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                       
                        <Link to={`/projects/chat-application`} className="nav-link text-primary rounded" title="Chat App">Chat App</Link>
                    </li>
                    <li className="nav-item">                    
                        <Link to={`/projects/ecommerce-application`} className="nav-link text-info rounded" title="ECommerce App">ECommerce App</Link>
                    </li>
            </ul>
            </nav>

            <form onSubmit={redirect}>
                <input type="text" className="form-control-lg m-4 border" placeholder="enter the username" value={projectid} onChange={(e) => setProjectid(e.target.value)} /><br />
                 <button className="btn btn-primary" type="submit">Submit</button>

               
            </form>
        </div>
    );
}
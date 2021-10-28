import React from 'react';
import { Link, useParams } from 'react-router-dom';
export default function Project() {
    const { id } = useParams();
    return (
        <div>
            <h1> You are in Project page</h1>
            <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link text-info rounded" to='/'>Home /</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-info rounded" to='/projects'>Projects /</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-info rounded" to={`/projects/${id}`}>{id}</Link>
                    </li>
                </ul>
            </nav>
            <h1>Project ID:{id}</h1>
        </div>
    );
}
import React, { useLayoutEffect } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
export default function Dashboard() {
    const history = useHistory();
    const location = useLocation();
    return (
        <div>
            <h1>Welcome to dash bord</h1>
            <h1>{location.pathname}</h1>
            <button onClick={() => history.push("./about")}>Navigate button
           </button>
     .   </div>
    );
}
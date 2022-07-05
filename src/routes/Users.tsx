import React from "react";
import { Outlet } from 'react-router-dom';
export function Users() {
    return <>
        <h1>Users</h1>
        <p>This is the users page.</p>
        <Outlet />
    </>;
}

export function AuthenticatedUsers() {
    return <div>
        <h1>Authenticated Users</h1>
    </div>
}
export function UnAuthenticatedUsers() {
    return <div>
        <h1>UnAuthenticated Users</h1>
    </div>
}
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Welcome from '../routes/Welcome';
import {Users, AuthenticatedUsers, UnAuthenticatedUsers} from '../routes/Users';

export default function App() {
    return <>
        <nav>
            <Link to='welcome'>Welcome</Link><br />
            <Link to='users'>Users</Link><br />
            <Link to='users/authenticated'>Authenticated Users</Link><br />
            <Link to='users/unauthenticated'>UnAuthenticated Users</Link><br />
        </nav>
        <Routes>
            <Route path="welcome" element={<Welcome />} />
            <Route path="users" element={<Users />} >
                <Route path="authenticated" element={<AuthenticatedUsers />} />
                <Route path="unauthenticated" element={<UnAuthenticatedUsers />} />
            </Route>
        </Routes >
    </>;
}
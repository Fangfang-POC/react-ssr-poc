import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Welcome from './routes/Welcome';
import Repos from './routes/Repos';
import { Users, AuthenticatedUsers, UnAuthenticatedUsers } from './routes/Users';

const queryClient = new QueryClient();
export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={true} />
            {MyRoutes()}
        </QueryClientProvider>
    );
}

export function MyRoutes() {
    return <>
        <nav>
            <Link to='welcome'>Welcome</Link><br />
            <Link to='repos'>Repos</Link><br />
            <Link to='users'>Users</Link><br />
            <Link to='users/authenticated'>Authenticated Users</Link><br />
            <Link to='users/unauthenticated'>UnAuthenticated Users</Link><br />
        </nav>
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="welcome" element={<Welcome />} />
            <Route path="repos" element={<Repos />} />
            <Route path="users/*" element={<Users />} >
                <Route path="authenticated" element={<AuthenticatedUsers />} />
                <Route path="unauthenticated" element={<UnAuthenticatedUsers />} />
            </Route>
        </Routes>
    </>;
}
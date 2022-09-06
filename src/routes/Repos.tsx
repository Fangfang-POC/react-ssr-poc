import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
export default function Repos(){
    const {isError, isLoading, isFetching, data, error} = useQuery('repos', async () => {
        const { data } = await axios.get('https://api.github.com/users/Fangfang-POC/repos');
        return data;
    });
    return (<div>My repos:
        {isLoading && <div>Loading...</div>}
        {/* {isError && <div>Error: {error.message}</div>} */}
        {!isLoading && !isError && <div>
            <ul>
                {data.map((repo: {id: string, name: string}) => <li key={repo.id}>{repo.name}</li>)}
            </ul>
        </div>}
    </div>);
}
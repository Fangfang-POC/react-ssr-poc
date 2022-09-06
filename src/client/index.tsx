import React, { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter} from 'react-router-dom';
import App from '../App';

const container = document.getElementById('root')!;
const root = hydrateRoot(container,
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rotas from './Route';
import { QueryClient, QueryClientProvider } from 'react-query';
import Providedados from './Context';

const QueryClien = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('view'));
root.render(
  <React.StrictMode>
    <Providedados>
      <QueryClientProvider client={QueryClien}>
        <Rotas />
      </QueryClientProvider>
    </Providedados>


  </React.StrictMode>
);


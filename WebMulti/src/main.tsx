import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'
import { ProviderStore } from './storeConfig/index.ts';
import { Store } from './store/index.ts';

createRoot(document.getElementById('root')!).render(
  <ProviderStore store={Store}>
    <StrictMode>
      <App />
    </StrictMode>,
  </ProviderStore>
)

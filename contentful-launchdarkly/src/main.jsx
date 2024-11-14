import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';

const init = async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: '66fc46fae1e7ff08544c1681',
    context: {
      "kind": "user",
      "key": "user-key-123abc",
      "name": "Sandy Smith",
      "email": "sandy@example.com"
    },
    options: { }
  });

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <LDProvider>
        <App />
      </LDProvider>
    </StrictMode>,
  );
};

init();

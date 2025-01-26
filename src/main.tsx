import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App, { router } from './App.tsx';

const rootElement = document.getElementById('root')!;

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement, {
    onUncaughtError: (_error, _errorInfo) => {
      // ... log error report
    },
    onCaughtError: (_error, _errorInfo) => {
      // ... log error report
    },
  });

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );

  router.navigate({ to: window.location.href.split('?')[1]?.split('=')[1] });
}

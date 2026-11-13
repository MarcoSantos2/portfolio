import { StrictMode } from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/geist/wght.css';
import '@fontsource-variable/geist-mono/wght.css';
import { App } from './App';
import './styles.css';
import './pageTransitions';

const root = createRoot(document.getElementById('root')!);

// Commit the first view before the browser can capture it for navigation.
flushSync(() => {
  root.render(<StrictMode><App /></StrictMode>);
});

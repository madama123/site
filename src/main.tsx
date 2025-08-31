import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n';
import { NotificationProvider } from './components/NotificationProvider';
import { ThemeProvider } from './shared/providers/ThemeProvider';
import { LanguageProvider } from './shared/providers/LanguageProvider';
import { MenuLanguageProvider } from './context/MenuLanguageContext/MenuLanguageContext';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <MenuLanguageProvider>
          <NotificationProvider>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </NotificationProvider>
        </MenuLanguageProvider>
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
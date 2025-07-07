import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dashboard from './components/Dashboard';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
};

export default App;
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import { Layout } from './Layout'
import './App.css';
import { Router } from './Router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;

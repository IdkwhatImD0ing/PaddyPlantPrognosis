import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages'
import { Navbar } from './components'
import About from './pages/About';
import './App.css';

function App() {
  return (
    <About />
  );
}

export default App;
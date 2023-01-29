import { BrowserRouter, Routes, Route}  from 'react-router-dom';

import {Home, Diseases, Resources, About, Diagnose, Disease } from './pages';
import { Navbar, Footer, ScrollToTop } from './components';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-[calc(100vh-80px)]">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/diseases" element={<Diseases />}></Route>
          <Route path="/diseases/:id" element={<Disease />}></Route>
          <Route path="/resources" element={<Resources />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/diagnose" element={<Diagnose />}></Route>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;

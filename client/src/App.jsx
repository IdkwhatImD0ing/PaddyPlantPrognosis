import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, Diseases, Resources, About, Diagnose } from './pages'
import { Navbar } from './components'
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
<<<<<<< HEAD
    <main className="w-full">
=======
    <main className="">
>>>>>>> 877c712e29f17e2c6ab92a99f2ddf170cc844198
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/diseases' element={<Diseases />}></Route>
        <Route path='/resources' element={<Resources />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/diagnose' element={<Diagnose />}></Route>
      </Routes>
    </main>
    </BrowserRouter>

  );
}

export default App;
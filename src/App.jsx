import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Abstract from './pages/Abstract';
import Digital from './pages/Digital';
import Photography from './pages/Photography';
import Sketchbook from './pages/Sketchbook';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Abstract' element={<Abstract />} />
        <Route path='Digital' element={<Digital />} />
        <Route path='Photography' element={<Photography />} />
        <Route path='Sketchbook' element={<Sketchbook />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

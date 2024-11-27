// App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './Components/CartProvider/CartProvider'; // Import CartProvider
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Work from './pages/Work';
import Store from './pages/Store';
import Cart from './pages/Cart';

function App() {
  return (
    <CartProvider>
      {' '}
      {/* Wrap the entire app with CartProvider to provide the cart context */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='work' element={<Work />} />
          <Route path='store' element={<Store />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

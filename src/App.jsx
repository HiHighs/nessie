import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './Components/CartProvider/CartProvider'; // Keep the CartProvider import as is
import { useCart } from './Components/CartContext/CartContext'; // Correct import for useCart
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Work from './pages/Work';
import Store from './pages/Store';
import Cart from './pages/Cart';
import Checkout from './pages/checkout/Checkout';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='work' element={<Work />} />
          <Route path='store' element={<Store />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<CheckoutWithCart />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

// Create a wrapper component to access `cart` and pass it to Checkout
function CheckoutWithCart() {
  const { cart } = useCart(); // Access cart from CartContext
  return <Checkout cart={cart} />;
}

export default App;

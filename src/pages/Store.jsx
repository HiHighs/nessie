import Images from '../Components/Images/Images';
import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';

function Store() {
  return (
    <div>
      <Navigation />
      <h1>Store</h1>
      <Images folder='Store' />
      <Footer />
    </div>
  );
}

export default Store;

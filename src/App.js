import './App.css';
import NavbarSec from './Component/Navbar';
import Carasoul from './Component/Carasoul/Carasoul';
import Portfolio from './Component/Portfolio/Portfolio';
import Developers from './Component/Developers/Developers';
import LetsDiscuss from './Component/LetsDiscuss/LetsDiscuss';
import Footer from './Component/Footer/Footer';
import Products from './Component/Products/Products';
import Services from './Component/Services/Services';



function App() {
  return (
    <div className="App">
      <NavbarSec />
      <Carasoul />
      <Products />
      <Services />
      <Portfolio />
      <Developers />
      <LetsDiscuss />
      <Footer />
    </div>
  );
}

export default App;

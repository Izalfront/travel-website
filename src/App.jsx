import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Info from './Components/Info/Info';
import Lounge from './Components/Lounge/Lounge';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';
import Subscribers from './Components/Subscribers/Subscribers';
import Support from './Components/Support/Support';
import Travelers from './Components/Travelers/Travelers';
import './main.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
      {/*<Footer /> */}
    </>
  );
}

export default App;

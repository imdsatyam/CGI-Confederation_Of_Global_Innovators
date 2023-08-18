import './App.css';
import Menu from './Components/Menu/Menu';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Count from './Components/Count/Count';
import Why from './Components/Why/Why';
import Gallery from './Components/Gallery/Gallery';
import Video from './Components/Video/Video';
import Sponsers from './Components/Sponsers/Sponsers';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <About />
      <Count />
      <Why />
      <Gallery />
      <Video />
      <Sponsers />
      <Footer />
    </div>
  );
}

export default App;

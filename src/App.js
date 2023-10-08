import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Blog from './Components/Blog';
import Tabs from './Components/Tabs';
import Hero from './Components/Hero';
import HeroFlip from './Components/HeroFlip';
import Team from './Components/Team'
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Tabs/>
    <Hero/>
    <Blog/>
    <HeroFlip/>
    <Team/>
    <Footer/>
    </>
  );
}

export default App;

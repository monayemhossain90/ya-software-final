
import './App.css';
import Header from './components/Header/Header';
import About from './components/UI/About';
import Banner from './components/UI/Banner';
import Blog from './components/UI/Blog';
import Career from './components/UI/Career';
import Counter from './components/UI/Counter';
import Join from './components/UI/Join';
import Services from './components/UI/Services';
import Testimonials from './components/UI/Testimonials';

function App() {
  return (
    <>
     <Header/>
     <Banner/>
     <Counter/>
     <About/>
     <Services/>
     <Testimonials/>
     <Blog/>
      <Join/>
      <Career/>
    </>
  );
}

export default App;

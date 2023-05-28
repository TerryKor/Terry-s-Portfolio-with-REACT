
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path='/Terry-s-Portfolio-with-REACT/' Component={About}/>
      <Route exact path='/Terry-s-Portfolio-with-REACT/portfolio' Component={Portfolio}/>
      <Route exact path='/Terry-s-Portfolio-with-REACT/contact' Component={Contact}/>
      <Route exact path='/Terry-s-Portfolio-with-REACT/resume' Component={Resume}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;

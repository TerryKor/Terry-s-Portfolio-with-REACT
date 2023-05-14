
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Content from './components/Content';
import Resume from './pages/Resume';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path='/' Component={About}/>
      <Route exact path='/portfolio' Component={Portfolio}/>
      <Route exact path='/contact' Component={Content}/>
      <Route exact path='/resume' Component={Resume}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;

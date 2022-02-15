import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Works from './pages/Works';
import About from './pages/About';

function App() {
  return (
    <div className='App'>
        <Navbar/>
        <Routes>
          <Route  exact path="/" element={<Home/>}/>
          <Route  path="/works" element={<Works/>}/>
          <Route  path="/about" element={<About/>}/>
        </Routes>
    </div>
  );
}

export default App;

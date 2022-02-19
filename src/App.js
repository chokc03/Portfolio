import {useState} from 'react';
import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Works from './pages/Works';
import About from './pages/About';
import {MdRefresh, MdOutlinePushPin} from 'react-icons/md';

function App() {
  const [zoom,setZoom] = useState({scale:1});
  const [pin,setPin] = useState(false);
  const handleScale=(e)=>{
    if(pin){
      setZoom({scale:1});
    }
    else{
      let scale=0;
      if(e.clientY<=window.innerHeight*1/2){
        scale = (e.clientY-window.innerHeight)*0.0001;
        if(zoom.scale<=1){
          scale=0;
        }
      }
      else{
        scale = e.clientY*0.0001;
      }
      const newScale = scale+zoom.scale;
      setZoom({scale:newScale});
      console.log(e.clientY);
    }
  }
  const refresh=()=>{
    setZoom({scale:1});
  }
  const pinch=()=>{
    setPin(value=>!value);
  }
  const pinchTrue=()=>{
    setPin(true);
  }
  return (
    <div className='App' onMouseMove={handleScale}>
        <div className="refresh" onClick={refresh}><MdRefresh className='refreshIcon'/></div>
        <div className="pinch" onClick={pinch}><MdOutlinePushPin className={pin?'pinIcon fix':'pinIcon'}/></div>
        <div className='text'>Move the Mouse UP&DOWN</div>
        <img  className="background" style={{transform:`scale(${zoom.scale})`}}  src="/image/image.svg" alt=""/>
        <Navbar pinchTrue={pinchTrue}/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/works" element={<Works/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </div>
  );
}

export default App;

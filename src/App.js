import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Works from './pages/Works';
import About from './pages/About';
import {MdRefresh, MdOutlinePushPin} from 'react-icons/md';
import Contact from './pages/Contact';
import './styles/App.scss';

function App() {
  const [zoom,setZoom] = useState({scale:1});
  const [pin,setPin] = useState(false);

  //functions that ables to zoom in and out by using the mouse Y axis and changing the image scale
  const handleScale=(e)=>{
    if(pin){
      setZoom({scale:1});
    }
    else{
      let scale=0;
      //zoom out when the mouse is half way up from the screen
      if(e.clientY<=window.innerHeight*1/2){
        scale = (e.clientY-window.innerHeight)*0.0001;
        if(zoom.scale<=1.1){
          scale=0;
        }
      }
      //zoom in when moving the mouse down
      else{
        scale = e.clientY*0.0001;
      }
      const newScale = scale+zoom.scale;
      setZoom({scale:newScale});
    }
  }
  //refresh the zoom scale
  const refresh=()=>{
    setZoom({scale:1});
  }
  //fix the image
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
        <div className='text'>Move the Mouse <span className='up'>UP</span>&<span className='down'>DOWN</span></div>
        <img  className="background" style={{transform:`scale(${zoom.scale})`}}  src="/image/image.svg" alt=""/>
        <Navbar pinchTrue={pinchTrue}/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/works" element={<Works/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
    </div>
  );
}

export default App;

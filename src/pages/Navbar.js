import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'
import '../styles/Navbar.scss';

function Navbar({pinchTrue}) {
    const[toggleNav,setToggleNav] = useState(false);
    //toggle the navbar(in and out)
    const handleNavbar=()=>{
        setToggleNav(value=>!value)
    }
    //disactive the navbar
    const removeActive=()=>{
        setToggleNav(false);
    }
    
    return (
        <div className={toggleNav?'navbarContainer':'navbarContainer Close'}>
            <div className='Navbar'>
                <ul>
                    <li onClick={removeActive}><Link to="/"><img src="/image/home.svg" alt="Home"/></Link></li>
                    <li onClick={removeActive}><Link onClick={pinchTrue} to="/about"><img src="/image/about.svg" alt="About"/></Link></li>
                    <li onClick={removeActive}><Link onClick={pinchTrue} to="/works"><img src="/image/website.png" alt="Works"/></Link></li>
                    <li onClick={removeActive}><a href="https://github.com/chokc03" target="_blank" rel="noreferrer"><img src="/image/github.svg" alt="Github"/></a></li>
                </ul>
            </div>
            <div className='toggleBtn'>
                <div className='circleBtn' onClick={handleNavbar}>
                    <div className={toggleNav?'arrow':' arrow close'}>
                        <IoIosArrowBack/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
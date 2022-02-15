import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'
import '../styles/Navbar.scss';

function Navbar() {
    const[toggleNav,setToggleNav] = useState(false);
    const handleNavbar=()=>{
        setToggleNav(value=>!value)
    }
    const removeActive=()=>{
        setToggleNav(false);
    }
    
    return (
        <div className={toggleNav?'navbarContainer':'navbarContainer Close'}>
            <div className='Navbar'>
                <ul>
                    <li onClick={removeActive}><Link to="/">Home</Link></li>
                    <li onClick={removeActive}><Link to="/works">Works</Link></li>
                    <li onClick={removeActive}><Link to="/about">About</Link></li>
                    <li onClick={removeActive}><a href="https://github.com/chokc03" target="_blank" rel="noreferrer">Github</a></li>
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
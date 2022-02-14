import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {IoIosArrowForward} from 'react-icons/io'
import '../styles/Navbar.scss';

function Navbar() {
    const[toggleNav,setToggleNav] = useState("false");
    const handleNavbar=()=>{
        setToggleNav(!toggleNav)
    }
    
    return (
        <div className={toggleNav?'navbarContainer':'navbarContainer Close'}>
            <div className='Navbar'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><a href="https://github.com/chokc03" target="_blank" rel="noreferrer">Github</a></li>
                </ul>
            </div>
            <div className='toggleBtn'>
                <div className='circleBtn' onClick={handleNavbar}>
                    <div className={toggleNav?'arrow':' arrow close'}>
                        <IoIosArrowForward/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
import React from 'react';
import '../styles/About.scss';

function About() {
  return (
    <div className='aboutContainer'>
        <div className='box'>
            <div className='category'>
                <h2>ABOUT</h2>
            </div>
            <div className='intro'>
                <h3>UI&UX Front-End Developer</h3>
                <p className='name'>Kyungchan Cho</p>
                <p className='age'>29.05.2000</p>
                <p className='introduction'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className='skills'>
                    <ul>
                        <li className='React'><img src="" alt=""/>React</li>
                        <li className='HTML'><img src="" alt=""/>HTML</li>
                        <li className='CSS'><img src="" alt=""/>CSS</li>
                        <li className='Javascript'><img src="" alt=""/>Javascript</li>
                        <li className='SCSS'><img src="" alt=""/>SCSS</li>
                        <li className='StyledComponent'><img src="" alt=""/>Styled-Component</li>
                        <li className='Redux'><img src="" alt=""/>Redux</li>
                    </ul>
                </div>
                <div className='resume'>
                    <a href="">Resume</a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About
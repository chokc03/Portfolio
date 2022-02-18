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
                        <li className='React'><img src="/image/react.svg" alt=""/>React</li>
                        <li className='Redux'><img src="/image/redux.svg" alt=""/>Redux</li>
                        <li className='Javascript'><img src="/image/js.svg" alt=""/>Javascript</li>
                        <li className='StyledComponent'><img src="/image/styled-component.png" alt=""/>Styled-Component</li>
                        <li className='HTML'><img src="/image/html-5.svg" alt=""/>HTML</li>
                        <li className='CSS'><img src="/image/css3.svg" alt=""/>CSS</li>
                        <li className='SCSS'><img src="/image/sass.png" alt=""/>SCSS</li>
                        <li className='Redux'><img src="/image/git.svg" alt=""/>Git</li>
                        <li className='Redux'><img src="/image/github.svg" alt=""/>Github</li>
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
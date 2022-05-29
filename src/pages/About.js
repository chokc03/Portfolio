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
                I am a Front-End developer from Republic of Korea. I have a passion about making interactive UI effects, animations, and Simple websites.
                </p>
                <p className='introduction'>
                Websites are helpful for people in various situations. Therefore, I have a goal in creating a website for public interest.
                </p>
                <p className='introduction'>
                I am a Fast learner, can quickly learn, understand, and utilize new skills in order to work in code.
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
                        <li className='MYSQL'><img src="/image/mysql.svg" alt=""/>MYSQL</li>
                    </ul>
                </div>
                <div className='resume'>
                    <a href="/">Resume</a>
                    <a href="/Contact">Contact</a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About
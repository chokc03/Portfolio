import React from 'react';
import '../styles/Works.scss';

function Works() {
  const works=[{
    id:1,
    title:'Recipe Website',
    image:'',
    skill:'Fetching Api',
    intro:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    website:""
  },{
    id:2,
    title:'Recipe Website',
    image:'',
    skill:'Fetching Api',
    intro:'lorem....',
    website:""
  }]

  return (
    <div className='workContainer'>
      <div className='box'>
        <div className='category'>
          <h2>Projects</h2>
        </div>
        <div className='intro'>
          {works.map((work)=>(
            <div className="workWrap" key={work.id}>
              <h3>{work.title}</h3>
              <div className='workContainer'>
                <div className='image'>
                  <img src={work.imaage} alt={work.title}/>
                </div>
                <div className='introduction'>
                  <p className='usedSkill'>{work.skill}</p>
                  <p className='workInfo'>{work.intro}</p>
                  <a href={work.website}>Github</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Works
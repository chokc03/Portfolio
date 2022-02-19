import React from 'react';
import '../styles/Works.scss';
import works from '../work.json';

function Works() {


  return (
    <div className='workContainer'>
      <div className='box'>
        <div className='category'>
          <h2>Projects</h2>
        </div>
        <div className='intro'>
          {works.works.map((work)=>(
            <div className="workWrap" key={work.id}>
                <div className='image'>
                  <a href={work.website} target='_blank' rel="noreferrer">
                    <img src={work.image} alt={work.title}/>
                  </a>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Works
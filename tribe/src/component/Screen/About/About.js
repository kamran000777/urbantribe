import React from 'react'
import './About.css';
import about1 from './about.webp';
import story from './story1.webp';
import achieve from './acivevment.svg';

function About() { 
  return (
    <div className='container__about'>
      <div className='about'>
          <div className='about__description'>
            <p className='about__us-title'>ABOUT US</p>
            <h1 className='website__title'>urbanTribe satisfy millions of customers worldwide</h1>
            <p className='para'>The all-in-one e-commerce platform to get all smart accessories</p>
            </div>
            <div className='img'>
              <img src={about1} alt='about1'></img>
              </div>
    </div>
    <div className='story'>
    <div className='story__img'>
              <img src={story} alt='story'></img>
              </div>
    <div className='about__description'>
            <p className='about__us-title'>urbanTribe STORY</p>
            <h1 className='website__title'>The first urbanTribe store was our own</h1>
            <p className='para'>Over a decade ago, we started a store to sell smart accessories online. None of the ecommerce solutions at the time gave us the control we needed to be successful—so we built our own. Today, businesses of all sizes use urbanTribe, whether they&apos;re selling online, in retail stores, or on-the-go.s</p>
            </div>
    </div>
    <div className='mission'>
      <p className='section__title'>OUR MISSION</p>
      <h1 className='mission_title'>Making technology better for everyone</h1>
      <p className='mission__para'>
      We help people achieve independence by making it easier to start, run, and grow a business. We believe the future of commerce has more voices, not fewer, so we&apos;re reducing the barriers to business ownership to make commerce better for everyone.
      </p>
    </div>
    <div className='achievment'>
      <h1>Achievement</h1>
      <img src={achieve} alt="achieveImg"/>
    </div>
    </div>
  )
}

export default About
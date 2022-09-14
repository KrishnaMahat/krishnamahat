import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'W', 'o', 'r ', 'k']}
              idx={15}
            />
          </h1>
          <h3>
          <p align="LEFT">
             1. Computer Science Instructor (April 2015 - July 2022)<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;@ Global Collegiate School  #HTML #CSS #JS #MYSQL #PHP <br/>
             &nbsp;&nbsp;&nbsp;&nbsp;Wordpress developer of https://globalcollegiate.edu.np<br/>
             2. Front end developer & Project manager (Feb 2017 - Present)<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;@ https://readersnepal.com #HTML #CSS #JS<br/>
             3. Front end developer (March 2018 - Present)<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;@ https://raralabs.com.au #HTML #CSS #ReactJS<br/>
             &nbsp;&nbsp;&nbsp;&nbsp;UI development under RARALABS:<br/>
             <ul type ="square">
             <li>https://crypdexx.raralabs.com.au</li>
             <li>https://drishya.com.np</li>
             <li>https://buyselllease.com.au</li>
             <li> https://expressremoval.org</li>
             </ul>
            
          </p>
          </h3>
        </div>

        <div class="rockon">
         
       
<div class="hand">
  <div class="palm">
    <div class="bone"></div>
    <div class="palm-shadow"></div>
  </div>
  <div class="thumb-base"></div>
  <div class="mobile-shadow"></div>
  <div class="mobile">
    <div class="screensaver"></div>
  </div>
  <div class="finger-5 finger">
    <div class="finger-shadow"></div>
  </div>
  <div class="finger-4 finger">
    <div class="fingernail"></div>
  </div>
  <div class="finger-3 finger">
    <div class="fingernail"></div>
  </div>
  <div class="finger-2 finger">
    <div class="finger-shadow"></div>
  </div>
  <div class="finger-1 finger">
    <div class="fingernail"></div>
  </div>
</div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

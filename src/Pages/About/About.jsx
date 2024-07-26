/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import './About.css'
import introImg from '../../assets/images/person.png'
import SkillCard from '../../components/SkillCard/SkillCard'
import Header from '../../components/Header/Header'
import { changeScroll } from '../../components/scrollPostionBtn/scrollPostionBtn'
import Footer from '../../components/Footer/Footer'
import { obs } from '../../components/observe.js/observe'



function About() {
    const skillsScroll = useRef(null)
    const skillsRef = useRef(null)
    const readRef = useRef(null)
    const cont = useRef(null)
    const [scroll, setScroll] = useState(0)
    








      
  return (
    <div className='about'>
        <Header pres="about" hero={{thirdSection:"Meet your designer and developer", secondSection:"My design & dev journey", secondShow:true, thirdShow:true}}/>

        <div ref={cont} className="aboutMe">
        <h1 className='sectionHead'>About me</h1>
        <div ref={readRef} className="readOnMe">
            <div className="imgBox">
                <img className='imgFill' src={introImg} alt="introImg" />
            </div>
            <div className="contextBox">
                <div className="bio">
                    <div className="text">

                        <h3>Hello there!</h3>
                        <p>
                        I’m Paul Peter, a forward-thinking college student immersed in the ever-evolving realms of Computer Science and Software Engineering. Embracing the exciting intersection of technology and creativity, I thrive on solving intricate problems through a blend of critical thinking and innovative solutions.
                        </p>
                        <br/>
                        <p>
                        With a robust 2-year background in web development, my expertise encompasses HTML, CSS, JavaScript, React, and Git. I’ve passionately honed my skills, transforming concepts into compelling digital experiences. As a tech enthusiast, I’m driven by the desire to contribute to cutting-edge projects and push the boundaries of what’s possible in the digital landscape.
                        </p>
                        <br/>
                        <p>
                        I bring a unique blend of creativity and technical proficiency to the table, coupled with a proven track record of delivering results. Eager to continue my journey in a dynamic professional environment, I am actively seeking opportunities that allow me to leverage my skills and contribute meaningfully to innovative projects.
                        </p>
                        <br/>
                        <p>
                        If you’re in search of a resourceful problem-solver and dedicated web developer to elevate your team, let’s explore the exciting possibilities ahead. Together, we can create impactful solutions and leave an indelible mark on the ever-evolving world of technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div ref={skillsRef}  className="skills">
            <h1 className='sectionHead'>Skills</h1>

            <ul className="skilltypes">
                <li className="type" onClick={()=>changeScroll(0, scroll, setScroll, skillsScroll.current.clientWidth, skillsScroll)} data-scroll="1"  data-pres={scroll==0?"true":false}>All</li>
                <li className="type" onClick={()=>changeScroll(1, scroll, setScroll, skillsScroll.current.clientWidth, skillsScroll)} data-scroll="2" data-pres={scroll==1?"true":false}>Coding</li>
                <li className="type" onClick={()=>changeScroll(2, scroll, setScroll, skillsScroll.current.clientWidth, skillsScroll)} data-scroll="3" data-pres={scroll==2?"true":false}>Technical</li>
                <li className="type" onClick={()=>changeScroll(3, scroll, setScroll, skillsScroll.current.clientWidth, skillsScroll)} data-scroll="4" data-pres={scroll==3?"true":false}>Design</li>
            </ul>

            <div className="overFlowSkills">
                <div className="skillsCont" ref={skillsScroll}>
                    <section className="all" data-pres={scroll==0?"true":"False"}>
                        <SkillCard duration={2} skill="Figma"/>
                        <SkillCard duration={2} skill="Javascript"/>
                        <SkillCard duration={2} skill="Node Js"/>
                        <SkillCard duration={2} skill="HTML/CSS"/>
                        <SkillCard duration={2} skill="React js"/>
                        <SkillCard duration={2} skill="Chrome debugging"/>

                    </section>
                    <section className="coding" data-pres={scroll==1?"true":"False"}>
                        <SkillCard duration={2} skill="Javascript"/>
                        <SkillCard duration={2} skill="Node Js"/>
                        <SkillCard duration={2} skill="HTML/CSS"/>
                        <SkillCard duration={2} skill="React js"/>
                    </section>
                    <section className="Technical" data-pres={scroll==2?"true":"False"}>
                        <SkillCard duration={2} skill="Chrome debugging"/>
                    </section>
                    <section className="Design" data-pres={scroll==3?"true":"False"}>
                        <SkillCard duration={2} skill="Figma"/>
                    </section>
                    
                </div>
            </div>
        </div>
        <Footer pres='about'/>

    </div>
  )
}

export default About
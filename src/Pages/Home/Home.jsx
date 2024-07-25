/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import introImg from '../../assets/images/person.png'
import Header from '../../components/Header/Header'
import SkillCard from '../../components/SkillCard/SkillCard'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import Footer from '../../components/Footer/Footer'
import ScrollPostionBtn from '../../components/scrollPostionBtn/scrollPostionBtn'

function Home() {
    const [Hover, setHover] = useState(false)
    const beingScrolled = useRef(null)
    const [A, setA] = useState(0)
    const [I, setI] = useState(0)


    useEffect(() => {
        window.addEventListener('resize', ()=>{
            setI(beingScrolled.current.clientWidth)
        })
    }, [])

    useEffect(() => {
        if(beingScrolled.current){
            setA(beingScrolled.current.children.length)
            setI(beingScrolled.current.clientWidth)
        }
    }, [beingScrolled])
    
    useEffect(() => {
        console.log(A, I);
    }, [A, I])


  return (
    <div className='home'>
        <Header pres="home" />
        <div className="intro">
            <div className="imgBox">
                <img className='imgFill' src={introImg} alt="introImg" />
            </div>
            <div className="contextBox">
                <div className="bio">
                    <div className="imgBox smallScr">
                        <img className='imgFill' src={introImg} alt="introImg" />
                    </div>
                    <div className="text">
                        <h3>Paul Peter</h3>
                        <p>A profound product designer and web developer with a keen eye for mind blowing designs, time managing and resource use efficiency with 2 years of experience</p>
                    </div>
                </div>
                
                <div className="productivity">
                    <h3>Productive in</h3>
                    <div className="overFlowBox">
                        <div className="skillCont" ref={beingScrolled}>
                            <SkillCard duration={2} skill="Web Development"/>
                            <SkillCard duration={2} skill="Web Design"/>
                            <SkillCard duration={2} skill="Web Development"/>
                            <SkillCard duration={2} skill="Web Design"/>
                        </div>
                    </div>
                    <ScrollPostionBtn A={A} W={205} I={I} scroll={beingScrolled} />
                </div>
            </div>
        </div>
        <div className="recentWorks">
            <h1>Recent Works</h1>

            <div className={Hover?'rWC hover':'rWC'}>
                <ProjectCard setHoverState={(val) => setHover(val)}/>
                <ProjectCard setHoverState={(val) => setHover(val)}/>
                <ProjectCard setHoverState={(val) => setHover(val)}/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
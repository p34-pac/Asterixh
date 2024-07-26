/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import './Works.css'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { changeScroll } from '../../components/scrollPostionBtn/scrollPostionBtn'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import Button from '../../components/button/Button'

function Works() {
    const [Hover, setHover] = useState(false)
    const worksScroll = useRef()
    const [scroll, setScroll] = useState(0)

  return (
    <div className='Works'>
        <Header pres="works" hero={{thirdSection:"Recent work showcase", secondSection:"Explore my projects", secondShow:true, thirdShow:true}}/>

        <div className="worksList">
            <h1 className='sectionHead'>works</h1>

            <ul className="worktypes">
                <li className="type" onClick={()=>changeScroll(0, scroll, setScroll, worksScroll.current.clientWidth, worksScroll)} data-scroll="1"  data-pres={scroll==0?"true":false}>All</li>
                <li className="type" onClick={()=>changeScroll(1, scroll, setScroll, worksScroll.current.clientWidth, worksScroll)} data-scroll="2" data-pres={scroll==1?"true":false}>Development</li>
                <li className="type" onClick={()=>changeScroll(2, scroll, setScroll, worksScroll.current.clientWidth, worksScroll)} data-scroll="3" data-pres={scroll==2?"true":false}>Design</li>
            </ul>

            <div className="overFlowWorks">
                <div className="worksCont" ref={worksScroll}>
                    <section className={Hover?'all hover':'all'} data-pres={scroll==0?"true":"False"}>
                        <ProjectCard setHoverState={(val) => setHover(val)}/>
                        <ProjectCard setHoverState={(val) => setHover(val)}/>
                        <ProjectCard setHoverState={(val) => setHover(val)}/>
                        <ProjectCard setHoverState={(val) => setHover(val)}/>
                        <ProjectCard setHoverState={(val) => setHover(val)}/>
                    </section>
                    <section className={Hover?'Development hover':'Development'} data-pres={scroll==1?"true":"False"}>
                        <ProjectCard setHoverState={(val) => setHover(val)}/>
                        <ProjectCard setHoverState={(val) => setHover(val)}/>
                        <ProjectCard setHoverState={(val) => setHover(val)}/>
                    </section>
                    <section className={Hover?'Design hover':'Design'} data-pres={scroll==2?"true":"False"}>
                        <ProjectCard setHoverState={(val) => setHover(val)}/>
                        <ProjectCard setHoverState={(val) => setHover(val)}/>
                    </section>
                    
                    
                </div>
            </div>
        </div>
        <Footer pres='works'/>

    </div>
  )
}

export default Works